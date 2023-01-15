const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('slide');
})


var nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.scrollY > 22) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
