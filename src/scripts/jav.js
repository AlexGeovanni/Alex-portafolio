
const iconMenu = document.querySelector('header [data-menu ]') // se

const Body = document.querySelector('body');
const dark = document.querySelector('#dark')
const light = document.querySelector('#light')

const Nav = document.querySelector('[data-content_nav]')

iconMenu.addEventListener('click',()=>{
    Nav.classList.toggle('show')
})

light.addEventListener('click',()=>{
    Body.classList.toggle('dark-mod')
})