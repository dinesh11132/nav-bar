
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



  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: true,
});

// document.addEventListener("DOMContentLoaded", () => {

//     const images = [
//         "a/background.webp",
//         "a/background2.webp",
//         "a/background3.jpg",
//         "a/background4.jpg"
//     ];

//     let index = 0;
//     const bgImage = document.getElementById("bgImage");

//     if (!bgImage) {
//         console.error("❌ bgImage id not found");
//         return;
//     }

//     setInterval(() => {
//         bgImage.style.opacity = 0;

//         setTimeout(() => {
//             index = (index + 1) % images.length;
//             bgImage.src = images[index];
//             bgImage.style.opacity = 1;
//         }, 1);

//     }, 2000);

// });

