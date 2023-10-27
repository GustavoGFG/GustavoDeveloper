const returnButtom = document.getElementById('return-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

function scrollToTop() {
  window.addEventListener('scroll', event => {
    if (this.scrollY > window.outerHeight) {
      returnButtom.classList.add('show');
    } else {
      returnButtom.classList.remove('show');
    }
  });
}

function openCloseMobileMenu() {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hideShowMenu');
  });
}
function closeMobileMenu() {
  navMenu.classList.remove('hideShowMenu');
}
openCloseMobileMenu();
scrollToTop();

function click() {
  console.log('clicou');
}
