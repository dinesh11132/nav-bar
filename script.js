
const menu = document.getElementById('menu');
const aside = document.querySelector('aside');
menu.addEventListener('click', () => {
    aside.classList.toggle('aside1');
if (aside.classList.contains('aside1')) {
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-x'); 
  } else {
    menu.classList.remove('fa-x');
    menu.classList.add('fa-bars');
  }
});
