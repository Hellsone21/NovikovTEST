const offset = 100;
const srcollUp = document.querySelector ('scroll-up ');
const scrollUpSvg = document.querySelector ('scroll-up__svg-up ');

// upDateSahsod

const upDateSahsod = () => {};

srcollUp.addEventListener('click', () => {
       window.scrollTo({
           top:0,
           behavior: 'smooth'
       });
});

