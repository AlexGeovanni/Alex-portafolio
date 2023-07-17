
const Body = document.querySelector('body');
const itemNav = document.querySelector('#items_nav')
const Card = document.querySelectorAll('.card')

// iconMenu.addEventListener('click',()=>{
//     Nav.classList.toggle('show')
// })

light.addEventListener('click',()=>{
    light.style.display='none'
    dark.style.display='block'
    Toggle();
})

dark.addEventListener('click',(e)=>{
    dark.style.display='none'
    light.style.display='block'
    Toggle();
})


function Toggle(){
    Body.classList.toggle('dark-mod');
    itemNav.classList.toggle('dark');
    Card.forEach((i)=> i.classList.toggle('card-dark'))
}