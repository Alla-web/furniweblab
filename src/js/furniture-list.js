import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//отримуємо список категорій:

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';
const STORAGE_KEY = 'pickedCategoryId';

function showError(error) {
  iziToast.error({
    message: `${error.message ?? String(error)}`,
    position: 'topCenter',
    timeout: 3000,
    backgroundColor: '#EF4040',
    messageColor: 'white',
    close: false,
  });
}

function showInfo(info) {
  iziToast.info({
    message: `${info}`,
    position: 'topCenter',
    timeout: 3000,
    backgroundColor: '#009b18',
    messageColor: 'white',
    close: false,
  });
}

const loader = document.querySelector('.loading');

function showLoader() {
  loader.hidden = false;
}

function hideLoader() {
  loader.hidden = true;
}

localStorage.removeItem(STORAGE_KEY);

let itemsPage = 1;
let totalItems = 0;
let totalPages = 0;
const limit = 8;

async function fetchCategories() {
  try {
    const { data: categories } = await axios('/categories');
    return categories;
  } catch (error) {
    showError(error);
  }
}

fetchCategories();

const categoriesBoxes = document.querySelectorAll('.category-card');

//промальовуємо назви категорій:

async function renderCategories(categoriesBoxes) {
  const categories = await fetchCategories();

  [...categoriesBoxes].forEach((categoryBox, index) => {
    if (index === 0) {
      return;
    }

    categoryBox.dataset.id = categories[index - 1]._id;
    categoryBox.children[0].textContent = categories[index - 1].name;
  });
}

renderCategories(categoriesBoxes);

//ловимо клік по категорії, грузимо товари з обраної категорії:

const furnitureListContainer = document.querySelector('.furniture-list');
const categoryContainer = document.querySelector('.category-container');

categoryContainer.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  showLoader();

  const pickedCategoryCard = event.target.closest('.category-card');

  if (!categoryContainer.contains(pickedCategoryCard) || !pickedCategoryCard) {
    return;
  }

  itemsPage = 1;
  furnitureListContainer.innerHTML = '';

  const categoryId = pickedCategoryCard.dataset.id;

  if (categoryId === undefined || categoryId === null) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categoryId));
  }

  try {
    const { data } = await axios(`/furnitures`, {
      params: {
        page: itemsPage,
        limit,
        category: categoryId,
      },
    });

    totalItems = data.totalItems;
    totalPages = Math.ceil(totalItems / limit);
    itemsPage = data.page;

    furnitureListContainer.innerHTML = renderFurnitureList(data.furnitures);

    loadMoreFurniBtn.hidden = itemsPage >= totalPages;

    hideLoader();
  } catch (error) {
    showError(error);
  }
}

function renderFurnitureList(furnitureList) {
  return furnitureList
    .sort((a, b) => a.price - b.price)
    .map(
      furniItem => `
        <li class="furniture-list-item">
            <img class="card-image" src="${furniItem.images[0]}" alt="${
        furniItem.name
      }"/>
            <h3 class="card-title">${furniItem.name}</h3>
            <ul class="card-color-container">
                ${(furniItem.color || [])
                  .map(
                    color => `
                    <li
                    class="card-color-item"
                    style="background-color: ${color};">1
                    </li>
                    `
                  )
                  .join('')}               
            </ul>
            <p class="card-price">${furniItem.price.toLocaleString()} грн</p>
            <button 
                class="details-button button" 
                data-id="${furniItem._id}">Детальніше</button>
        </li>
    `
    )
    .join('');
}

// пагінація по натисканню на кнопку
const loadMoreFurniBtn = document.querySelector('.load-more-button');

loadMoreFurniBtn.addEventListener('click', onLoadMoreFfurniBtnClick);

async function onLoadMoreFfurniBtnClick(event) {
  furnitureListContainer.insertAdjacentElement('beforeend', loader);
  showLoader();

  if (!furnitureListContainer.children.length) {
    showInfo('Please, pick the furnirure category before');
    return;
  }

  itemsPage++;
  const categoryId = JSON.parse(localStorage.getItem(STORAGE_KEY));

  try {
    const { data } = await axios(`/furnitures`, {
      params: {
        page: itemsPage,
        limit,
        category: categoryId,
      },
    });

    totalItems = data.totalItems;
    totalPages = Math.ceil(totalItems / limit);
    itemsPage = Number(data.page);

    if (itemsPage < totalPages) {
      furnitureListContainer.insertAdjacentHTML(
        'beforeend',
        renderFurnitureList(data.furnitures)
      );
      loadMoreFurniBtn.hidden = false;
    } else {
      showInfo('This categoty has not more furniture');
      loadMoreFurniBtn.hidden = true;
    }

    const furniListItem = furnitureListContainer.querySelector(
      '.furniture-list-item'
    );
    if (furniListItem) {
      window.scrollBy({
        left: 0,
        top: furniListItem.getBoundingClientRect().height,
        behavior: 'smooth',
      });
    }

    hideLoader();
  } catch (error) {
    showError(error);
  }
}
