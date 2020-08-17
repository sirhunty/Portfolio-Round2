// js file to select items from the DOM and allow for the open and closing of the menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.branding');
const navItems = document.querySelectorAll('.nav-item');

// setting of the intial states (true and false)
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // menu list is not currently shown until click event
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // setting menu state to true
        showMenu = true;
        // else the menu shows the list items
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // setting the menu state back to false
        showMenu = false;
    }
}