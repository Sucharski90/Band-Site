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