


// para abir el menu de navegacion en dispositivo movil
const iconMenu = document.querySelector('header [data-menu ]'); 
const Nav = document.querySelector('#nav-items');
const item_A = document.querySelectorAll('#nav-items ul a')
iconMenu.addEventListener('click',()=>{
    Nav.classList.toggle('show');
})

item_A.forEach((i)=>i.addEventListener('click',()=>Nav.classList.remove('show')))

//  para los modos dark y light de la web

const Body = document.querySelector('body');
const dark = document.querySelector('#dark')
const light = document.querySelector('#light')
const Ul = document.querySelector('#nav-items ul')

let isTrue = localStorage.getItem('isTrue');
        isTrue =JSON.parse(isTrue);

light.addEventListener('click',()=>{
    Body.classList.toggle('dark-mod');
    Ul.classList.toggle('dark-ul');
    localStorage.setItem('isTrue','false');

    light.style.display='none';
    dark.style.display='block';
})

dark.addEventListener('click',()=>{
    Body.classList.toggle('dark-mod')
    Ul.classList.toggle('dark-ul')    
    localStorage.setItem('isTrue','true')

    dark.style.display='none';
    light.style.display='block';
})


if(isTrue == true){
    Body.classList.toggle('dark-mod');
    Ul.classList.toggle('dark-ul');

    dark.style.display='none';
    light.style.display='block';
}
