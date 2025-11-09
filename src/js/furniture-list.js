import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//отримуємо список категорій:

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';
const STORAGE_KEY = 'pickedCategoryId';

async function fetchCategories() {
  try {
    const { data: categories } = await axios('/categories');
    return categories;
  } catch (error) {
    iziToast.error({
      message: `${error.message ?? String(error)}`,
      position: 'topCenter',
      timeout: 3000,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      close: false,
    });
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

const furnitureListContainer = document.querySelector('.futniture-list');
const categoryContainer = document.querySelector('.category-container');

categoryContainer.addEventListener('click', onCategoryClick);
let itemsPage = 1;

async function onCategoryClick(event) {
  const pickedCategoryCard = event.target.closest('.category-card');

  if (!categoryContainer.contains(pickedCategoryCard) || !pickedCategoryCard) {
    return;
  }

  const categoryId = pickedCategoryCard.dataset.id;
  localStorage.setItem(STORAGE_KEY, categoryId);

  try {
    const { data: categoryItems } = await axios(`/furnitures`, {
      params: {
        page: itemsPage,
        limit: 10,
        category: categoryId,
        // sortDirect: asc,
      },
    });

    furnitureListContainer.innerHTML = renderFurnitureList(
      categoryItems.furnitures
    );
  } catch (error) {
    iziToast.error({
      message: `${error.message ?? String(error)}`,
      position: 'topCenter',
      timeout: 3000,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      close: false,
    });
  }
}

function renderFurnitureList(furnitureList) {
  return furnitureList
    .sort((a, b) => a.price - b.price)
    .map(
      furniItem => `
        <li>
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
  if (!furnitureListContainer.length) {
    return;
  }

  itemsPage += 1;
  const categoryId = localStorage.getItem(STORAGE_KEY);

  try {
    const { data: nextFurniList } = await axios(`/furnitures`, {
      params: {
        page: itemsPage,
        limit: 10,
        category: categoryId,
      },
    });

    console.log(nextFurniList);
  } catch (error) {
    iziToast.error({
      message: `${error.message ?? String(error)}`,
      position: 'topCenter',
      timeout: 3000,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      close: false,
    });
  }
}
