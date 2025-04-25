const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const updateSlider = (index) => {
  slides.forEach((s, i) => {
    s.classList.remove('active');
    if (i === index) s.classList.add('active');
  });
};

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}, 5000);

updateSlider(currentIndex);