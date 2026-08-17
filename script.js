const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '76px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.background = open ? '#061321' : '';
  nav.style.padding = open ? '20px' : '';
  nav.style.flexDirection = open ? 'column' : '';
});
