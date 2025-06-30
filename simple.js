
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const darkToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  if (darkToggle) darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  
  darkToggle.textContent = isDark ? '☀️' : '🌙';

  
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});


const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

const slideWidth = 240; 

if (sliderTrack && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    sliderTrack.scrollBy({
      left: -slideWidth,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    sliderTrack.scrollBy({
      left: slideWidth,
      behavior: 'smooth'
    });
  });
}
