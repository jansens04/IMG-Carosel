const carosel = document.querySelector('.carosel');
const imgCarosel = document.querySelectorAll('.img');
const iconCarosel = document.querySelectorAll('i');

let indexSlider = 1;
let generate;

const autoSlider = () => {
  generate = setInterval(() => sliderCarosel(++indexSlider), 2000);
};

autoSlider();

const sliderCarosel = () => {
  indexSlider = indexSlider % imgCarosel.length;
  carosel.style.transform = `translate(-${indexSlider * 100}%)`;
};

iconCarosel.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('btnRight')) {
      indexSlider++;
      indexSlider = indexSlider % imgCarosel.length;
      carosel.style.transform = `translate(-${indexSlider * 100}%)`;
    } else {
      indexSlider--;

      indexSlider = indexSlider < 0 ? imgCarosel.length - 1 : indexSlider;
      carosel.style.transform = `translate(-${indexSlider * 100}%)`;
    }
  });
});
