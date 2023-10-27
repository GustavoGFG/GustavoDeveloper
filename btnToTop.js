let returnButtom = document.getElementById('return-btn');

function scrollToTop() {
  window.addEventListener('scroll', event => {
    if (this.scrollY > window.outerHeight) {
      returnButtom.classList.add('show');
    } else {
      returnButtom.classList.remove('show');
    }
  });
}

scrollToTop();
