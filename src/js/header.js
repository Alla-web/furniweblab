const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  const isActive = nav.classList.toggle('active');
  overlay.classList.toggle('active');
  burger.classList.toggle('active', isActive);
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  burger.classList.remove('active');
});

// Закриття меню при кліку на пункт навігації
document.querySelectorAll('.nav__link, .nav__btn').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('active');
  });
});
