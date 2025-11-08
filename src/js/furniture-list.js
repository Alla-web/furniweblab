import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

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

//отримуємо список категорій
fetchCategories();

const categoriesBoxes = document.querySelectorAll('.category-card');

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

//промальовуємо назви категорій
renderCategories(categoriesBoxes);

//ловимо клік по категорії
const furnitureListContainer = document.querySelector('.futniture-list');
const categoryContainer = document.querySelector('.category-container');

categoryContainer.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  event.preventDefault();

  const pickedCategoryCard = event.target.closest('.category-card');

  if (!categoryContainer.contains(pickedCategoryCard) || !pickedCategoryCard) {
    return;
  }

  const categoryId = pickedCategoryCard.dataset.id;
  let itemsPage = 1;

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
