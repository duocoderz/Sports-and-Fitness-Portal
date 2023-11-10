window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 50);
});

const togglebar = document.querySelector('.toggle');
const menu = document.querySelector('ol');

function navToggle(){
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
};
