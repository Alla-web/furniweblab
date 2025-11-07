import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import  Raty  from 'raty-js';
import 'raty-js/src/raty.css';






const feedbacksList = document.querySelector('.feedbacks-list');

feedbacksList.innerHTML = `
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-pagination"></div>

    <button class="general-btn custom-prev">BTN PREV</button>
    <button class="general-btn custom-next">BTN NExt</button>

  </div>
`;

const wrapper = document.querySelector('.swiper .swiper-wrapper');

export function roundRating(value) {
  if (value >= 3.3 && value <= 3.7) return 3.5;
  if (value >= 3.8 && value <= 4.2) return 4;
  return Math.round(value * 10) / 10;
}

export async function getFeedbacks() {
  try {
    const feedbacks = await axios(
      'https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1'
    );
    console.log(feedbacks.data);

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
          <div class="stars" data-score="${feedback.rate}">${roundedRate}</div>
          <p class="swiper-text">“${feedback.descr}”</p>
          <p class="swiper-text-name">${feedback.name}</p>
        </div>
      </div>
    `;
    wrapper.insertAdjacentHTML('beforeend', slide);
  });

  document.querySelectorAll('.stars').forEach(el => {
    const score = parseFloat(el.dataset.score);
    new Raty(el, {
      readOnly: true,
      score: score,
      
      halfShow: true,
      precision: true,
      path: 'https://cdnjs.cloudflare.com/ajax/libs/raty-js/2.8.0/images',
    });
  });
  
  
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  const prevBtn = document.querySelector(".custom-prev");
  const nextBtn = document.querySelector(".custom-next");

  prevBtn.addEventListener("click", () => {
    swiper.slidePrev();
  })
  nextBtn.addEventListener("click", () => {
    swiper.slideNext();
  })


});

