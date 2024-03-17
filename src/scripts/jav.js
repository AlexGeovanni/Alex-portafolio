// Logo click
document.querySelector('#Logo_dev').addEventListener('click',()=>location.reload())

// para abir el menu de navegacion en dispositivo movil
const iconMenu = document.querySelector('header [data-menu ]'); 
const Nav = document.querySelector('#nav-items');
const item_A = document.querySelectorAll('#nav-items ul a');
iconMenu.addEventListener('click',()=>{
    Nav.classList.toggle('show');
})

item_A.forEach((i)=>i.addEventListener('click',()=>Nav.classList.remove('show')));


//  para los modos dark y light de la web
const Body = document.querySelector('body');
const dark = document.querySelector('#dark')
const light = document.querySelector('#light');
const Ul = document.querySelector('#nav-items ul');
const formSpan = document.querySelectorAll('form span');

// Verifica si el dispositivo tiene activado el modo oscuro y almacena en el localStorage el boolean
if(window.matchMedia){
    localStorage.setItem('isTrue','true');
    Body.classList.toggle('dark-mod');
    Ul.classList.toggle('dark-ul');
    formSpan.forEach((i)=>i.classList.toggle('dark-span'));  

    dark.style.display='block';
    light.style.display='none';
} 


// recupera lo almacenado de tipo boolean
let isTrue = localStorage.getItem('isTrue');
        isTrue =JSON.parse(isTrue);

if(isTrue == true){
    Body.classList.add('dark-mod');
    Ul.classList.add('dark-ul');
    formSpan.forEach((i)=>i.classList.add('dark-span')); 

    dark.style.display='none';
    light.style.display='block';
}

light.addEventListener('click',()=>{
    Body.classList.toggle('dark-mod');
    Ul.classList.toggle('dark-ul');
    formSpan.forEach((i)=>i.classList.toggle('dark-span'));; 
    localStorage.setItem('isTrue','false');

    light.style.display='none';
    dark.style.display='block';
})


dark.addEventListener('click',()=>{
    Body.classList.toggle('dark-mod');
    Ul.classList.toggle('dark-ul');
    formSpan.forEach((i)=>i.classList.toggle('dark-span'));  

    localStorage.setItem('isTrue','true');

    dark.style.display='none';
    light.style.display='block';
})



