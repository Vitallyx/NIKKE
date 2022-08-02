///////////////////////////////////
// Header

let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

///////////////////////////////////
// Header Mobile

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}