const humberBtn = document.querySelector('.humburger');
const menuBar = document.querySelector('.seconde-bar');
const closee = document.querySelector('.closer');
const logo = document.querySelector('.Logo');
const goSction = document.querySelectorAll('.tags');

humberBtn.addEventListener('click', () => {
  menuBar.classList.add('minimenu');
  closee.style.display = 'flex';
  humberBtn.style.visibility = 'hidden';
  logo.style.visibility = 'hidden';
});

closee.addEventListener('click', () => {
  menuBar.classList.remove('minimenu');
  closee.style.display = 'none';
  humberBtn.style.visibility = 'visible';
  logo.style.visibility = 'visible';
});

goSction.forEach((n) => {
  n.addEventListener('click', () => {
    menuBar.classList.remove('minimenu');
    closee.style.display = 'none';
    humberBtn.style.visibility = 'visible';
    logo.style.visibility = 'visible';
  });
});
