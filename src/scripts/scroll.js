const triggerFuction = (entries) => {
    entries.forEach(entry => {
            if(entry.target.id === 'home') Home(entry);   
    });
}

const option = {
    root:null,
    rootMargin:'15px',
    threshold:0.5,
    
}

const InterObserver = new IntersectionObserver(triggerFuction,option);

const target = document.querySelector('#home');
InterObserver.observe(target);

function Home(entry) {
    const element = entry.target.querySelector('#profil');
    const img = entry.target.querySelector('#profil img');
    const h1 = entry.target.querySelector('#titles h1');
    const p = entry.target.querySelector('#titles div > div');

    element.classList.toggle('unset',entry.isIntersecting);
    img.classList.toggle('unset',entry.isIntersecting);

    h1.classList.add('unset',entry.isIntersecting);
    p.classList.add('unset',entry.isIntersecting);
}



