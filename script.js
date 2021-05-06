const burger = document.querySelector('.burger');
const navContainer = document.querySelector('.navigation_buttons');
const navLinks = document.querySelectorAll('.nav_button');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselImage = document.querySelector('.carousel_image');
const imageShadow = document.querySelector('.image_shadow');
const mainTitle = document.querySelector('.main_title');
const questions = document.querySelectorAll('.question');
const questionTooglers = document.querySelectorAll('.mark');
let currentImg = 0;

const carouselItems = {
  img: [
    '/images/stock-photo-177211577.png',
    '/images/slide2.png',
    '/images/slide3.png',
  ],
  name: ['Adam Suarez', 'Jems Snow', 'Lina Suarez'],
};
const handleHighlight = (item) => {
  item.classList.add('nav_button_active');
};
const removeHighlight = () => {
  navLinks.forEach((el) => {
    el.classList.remove('nav_button_active');
  });
};
navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    removeHighlight();
    handleHighlight(item);
  });
});

burger.addEventListener('click', () => {
  navContainer.classList.toggle('active_nav');
});

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    navContainer.classList.remove('active_nav');
  });
});
const handleTransition = () => {
  imageShadow.setAttribute('style', 'opacity:0');
  carouselImage.setAttribute('style', 'opacity:0');
  setTimeout(() => {
    imageShadow.setAttribute('style', 'opacity:1');
    carouselImage.setAttribute('style', 'opacity:1');
  }, 300);
  carouselImage.setAttribute('src', carouselItems.img[currentImg]);
  mainTitle.textContent = carouselItems.name[currentImg];
};
const handlePrevClick = () => {
  if (currentImg !== 0) {
    currentImg--;
  } else {
    currentImg = carouselItems.img.length - 1;
  }
  handleTransition();
};

const handleNextClick = () => {
  if (currentImg !== carouselItems.img.length - 1) {
    currentImg++;
  } else {
    currentImg = 0;
  }
  handleTransition();
};

prev.addEventListener('click', () => {
  clearInterval(interval);
  handlePrevClick();
});
next.addEventListener('click', () => {
  clearInterval(interval);
  handleNextClick();
});

const interval = setInterval(() => {
  handleNextClick();
}, 5000);

questionTooglers.forEach((toogler) => {
  toogler.addEventListener('click', (e) => {
    questionTooglers.forEach((toogler) => {
      toogler.textContent = '+';
    });
    questions.forEach((el) => {
      el.classList.remove('active');
    });
    questions[e.target.id - 1].classList.add('active');
    toogler.textContent = '-';
  });
});
