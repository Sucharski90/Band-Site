console.log('all hooked up');
// side nav
const navOpen = document.querySelector('#nav-button');
const navClose = document.querySelector('#nav-button-close');
let nav = document.querySelector('#nav');

function openNavBar() {
    nav.style.display = 'block';
  };
  function closeNavBar() {
    nav.style.display = 'none';
  };
navOpen.addEventListener('click', openNavBar);
navClose.addEventListener('click', closeNavBar);



// gallery
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    current.src = e.target.src;
    // e.target.style.opacity = opacity;
}

