const navLinks = document.querySelectorAll('.nav_button');
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
