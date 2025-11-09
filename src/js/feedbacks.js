import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


const feedbacksList = document.querySelector('.feedbacks-list');

feedbacksList.innerHTML = `
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="./img/sprite.svg#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="./img/sprite.svg#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;

const wrapper = document.querySelector('.swiper .swiper-wrapper');

export function roundRating(value) {
  if (value >= 3.3 && value <= 3.7) return 3.5;
  if (value >= 3.8 && value <= 4.2) return 4;
  return Math.round(value * 10) / 10;
}

function createStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-full"></use></svg>`;
  }
  if (halfStar) {
    starsHTML += `<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-half"></use></svg>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-empty"></use></svg>`;
  }

  return starsHTML;
}

export async function getFeedbacks() {
  try {
    const feedbacks = await axios(
      'https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1'
    );

    return feedbacks.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

getFeedbacks().then(data => {
  data.feedbacks.forEach(feedback => {
    const roundedRate = roundRating(feedback.rate);
    const slide = `
      <div class="swiper-slide">
        <div class="feedback-card">
          <div class="stars">${createStars(roundedRate)}</div>
          <p class="swiper-text">“${feedback.descr}”</p>
          <p class="swiper-text-name">${feedback.name}</p>
        </div>
      </div>
    `;
    wrapper.insertAdjacentHTML('beforeend', slide);
  });
 
  const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: '.custom-prev',
      nextEl: '.custom-next',
    },
    breakpoints: {
      768: {
      slidesPerView: 2, 
      spaceBetween: 24, 
    },
      1440: {
        slidesPerView: 3, 
      spaceBetween: 24
      }
  },
  });
})
.catch(error => {
  console.error('Ошибка при инициализации слайдера отзывов:', error);
  feedbacksList.innerHTML = `<p style="color: red;">
      Не удалось загрузить отзывы. Пожалуйста, попробуйте обновить страницу.
    </p>`;
})
