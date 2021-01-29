const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menuOpen')
const menuClose = document.querySelector('.menuClose')

menuOpen.addEventListener('click', function() {
    menu.classList.add('menu_open')
})
menuClose.addEventListener('click', function() {
    menu.classList.remove('menu_open')
})