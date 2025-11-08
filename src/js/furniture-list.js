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
    .map(
      furniItem => `
        <li data-id="${furniItem._id}">
            <img class="" src="${furniItem.images[0]}" alt="${furniItem.name}"/>
            <h3 class="">${furniItem.name}</h3>
            <ul class="">
                <li class="" style="background-color: ${
                  furniItem.color[0]
                }; color: transparent;">1</li>
                <li class="" style="background-color: ${
                  furniItem.color[1]
                }; color: transparent;">1</li>
                <li class="" style="cobackground-color: ${
                  furniItem.color[2]
                }; color: transparent;">1</li>
            </ul>
            <p class="">${furniItem.price.toLocaleString()}</p>
            <button class="button load-more-furni-button">Детальніше</button>
        </li>
    `
    )
    .join('');
}
