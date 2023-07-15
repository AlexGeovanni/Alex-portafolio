
const iconMenu = document.querySelector('header [data-menu ]') // se

const Nav = document.querySelector('[data-content_nav]')

iconMenu.addEventListener('click',()=>{
    Nav.classList.toggle('show')
})