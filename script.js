const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.burger');
const navContainer = document.querySelector('.navigation_buttons');
const navLogo = document.querySelector('.navigation_logo');
const navLinks = document.querySelectorAll('.nav_button');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselImage = document.querySelector('.carousel_image');
const mainTitle = document.querySelector('.main_title');
const questions = document.querySelectorAll('.question');
const questionTooglers = document.querySelectorAll('.marked');
const questionContent = document.querySelector('.question_content');
const dots = document.querySelectorAll('.dot');
const clientPicture = document.querySelector('.client_picture');
const clientText = document.querySelector('.client_text');
const clientName = document.querySelector('.client_name');
const clientPosition = document.querySelector('.client_position');
const form = document.getElementById('contact_form');
const status = document.querySelector('.status');
const contrast = document.querySelector('.contrast');
const fontSwitches = document.querySelectorAll('.default');

// HTML sections
const practice = document.getElementById('practice');
const client = document.getElementById('client');
const questionz = document.getElementById('questions');
const footer = document.getElementById('footer');

let currentImg = 0;

const carouselItems = {
  img: ['/images/slide.jpg', '/images/slide2.jpg', '/images/slide3.jpg'],
  name: ['Adam Suarez', 'Jems Snow', 'Lina Suarez'],
};

const faq = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum',
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum.",
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia ',
  'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires ',
];

const clientOpinions = {
  image: ['/images/client.png', '/images/client2.png', '/images/client3.png'],
  opinion: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio nesciunt esse, saepe nisi, tempora eos accusantium exercitationem ullam ipsum dignissimos sunt voluptatibus voluptates libero dolores error quidem nemo assumenda!',
    'Integer a egestas purus, a pulvinar lectus. Fusce id tortor venenatis tellus pulvinar ornare. Donec justo augue, volutpat in accumsan eu, luctus ac purus. Aliquam laoreet in lectus eget vehicula. Ut molestie, dui sed imperdiet convallis, libero.',
    'Pellentesque nec arcu in enim convallis aliquet. Maecenas scelerisque malesuada libero quis cursus. Nam facilisis posuere justo, sed egestas lectus condimentum vitae. Etiam porttitor ultrices lectus porta sodales. Etiam rhoncus erat neque, et vulputate metus pulvinar eget.',
  ],
  name: ['Alon Smith', 'Kate Jones', 'Alex Smith'],
  position: ['CEO of AVC Group', 'CTO of ABC', 'Freelancer'],
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
  carouselImage.setAttribute('style', 'opacity:.5');
  setTimeout(() => {
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
}, 3000);

questionTooglers.forEach((toogler) => {
  toogler.addEventListener('click', (e) => {
    questionContent.textContent = faq[e.target.id - 1];
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

const handleClientChenge = (e) => {
  const current = e.target;
  dots.forEach((dot) => dot.classList.remove('active_dot'));
  current.classList.add('active_dot');
  clientPicture.setAttribute('src', clientOpinions.image[current.id - 1]);
  clientText.innerText = clientOpinions.opinion[current.id - 1];
  clientName.innerText = clientOpinions.name[current.id - 1];
  clientPosition.innerText = clientOpinions.position[current.id - 1];
};

dots.forEach((dot) => {
  dot.addEventListener('click', handleClientChenge);
});

// Contact form

async function handleSubmit(e) {
  e.preventDefault();
  var data = new FormData(e.target);

  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      status.innerHTML = 'Message sent!';
      form.reset();
    })
    .catch((err) => {
      status.innerHTML = 'Error';
    });
}
form.addEventListener('submit', handleSubmit);

// Dark mode

const contrastToogle = () => {
  document.querySelector('.wrapper').classList.toggle('dark_mode');
  navLogo.classList.toggle('dark_mode_logo');
  questions.forEach((quest) => quest.classList.toggle('dark_mode'));
  navLinks.forEach((link) => link.classList.toggle('dark_font'));
  practice.classList.toggle('dark_mode');
  client.classList.toggle('dark_mode');
  questionz.classList.toggle('dark_mode');
  footer.classList.toggle('dark_mode');
  const burger_children = burger.children;
  for (let bar of burger_children) {
    bar.classList.toggle('light_burger');
  }
};

contrast.addEventListener('click', contrastToogle);

for (let toggler of fontSwitches) {
  toggler.addEventListener('click', (e) => {
    if (e.target.id == '1') {
      wrapper.classList.remove('font_medium');
      wrapper.classList.remove('font_large');
    }
    if (e.target.id == '2') {
      wrapper.classList.remove('font_large');
      wrapper.classList.add('font_medium');
    }
    if (e.target.id == '3') {
      wrapper.classList.add('font_large');
    }
  });
}
