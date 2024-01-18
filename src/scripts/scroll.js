
const triggerFuction = (entries) => {
    entries.forEach(entry => {
            if(entry.target.id === 'home') {
                Home(entry);
            } else if(entry.target.id === 'technology') {
                
            }
        
       
    });
}

const option = {
    root:null,
    rootMargin:'15px',
    threshold:0.5,
    
}

const InterObserver = new IntersectionObserver(triggerFuction,option);

const target = document.querySelector('#home');
const target2 = document.querySelector('#technology');
InterObserver.observe(target);
InterObserver.observe(target2);



function Home(entry) {
    const element = entry.target.querySelector('#profil');
    const img = entry.target.querySelector('#profil img');
    const h1 = entry.target.querySelector('#titles h1');
    const h3 = entry.target.querySelector('#titles div > div');

    element.classList.toggle('unset',entry.isIntersecting);
    img.classList.toggle('unset',entry.isIntersecting);
    h1.classList.toggle('unset',entry.isIntersecting);
    h3.classList.toggle('unset',entry.isIntersecting);
}


function Technology(entry) {
    const img = entry.target.querySelectorAll('img');
    const p = entry.target.querySelectorAll('p');

    img.forEach(img => {
        img.classList.toggle('unset',entry.isIntersecting);
    });
    
    p.forEach(p => {
        p.classList.toggle('unset',entry.isIntersecting);
    });
}
