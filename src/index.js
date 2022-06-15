import './style.css';


function restaurantPage() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    return element;
};

document.body.appendChild(restaurantPage());

function header() {
    const element = document.createElement('header');
    element.classList.add('header');

    const div = document.createElement('div');
    div.classList.add('header-nav');

    let btn = document.createElement('button');
    btn.classList.add('header-btn-one');
    btn.textContent = 'Home';
    div.appendChild(btn);
    btn = document.createElement('button');
    btn.classList.add('header-btn-two');
    btn.textContent = 'Menu';
    div.appendChild(btn);
    btn = document.createElement('button');
    btn.classList.add('header-btn-three');
    btn.textContent = 'Contact';
    div.appendChild(btn);

    element.appendChild(div);
    
    return element;
};

const content = document.querySelector('#content')

content.appendChild(header());

function homePage() {
    const element = document.createElement('div');
    element.classList.add('home-page');

    return element;
};

content.appendChild(homePage());

function menuPage() {
    const element = document.createElement('div');
    element.classList.add('menu-page','hidden');

    return element;
};

content.appendChild(menuPage());

function contactPage() {
    const element = document.createElement('div');
    element.classList.add('contact-page','hidden');

    return element;
};

content.appendChild(contactPage());




let btn1 = document.querySelector('.header-btn-one');
let btn2 = document.querySelector('.header-btn-two');
let btn3 = document.querySelector('.header-btn-three');
const main = document.querySelector('.home-page');

btn1.addEventListener('click', () => {
    main.classList.remove('hidden');
});

btn2.addEventListener('click', () => {
    main.classList.add('hidden');
});

btn3.addEventListener('click', () => {
    main.classList.add('hidden');
});




