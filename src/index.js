import './style.css';
import { header } from './header';
import { homePage } from './homePage';
import { menuPage } from './menu';
import { contactPage } from './contact';
import { footer } from './footer';


document.body.appendChild(header.element);

function content() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    return element;
};

document.body.appendChild(content());

document.body.appendChild(footer.element);



// const content = document.querySelector('#content')

// content.appendChild(header.element);

// content.appendChild(homePage.element);







// let btn1 = document.querySelector('.header-btn-one');
// let btn2 = document.querySelector('.header-btn-two');
// let btn3 = document.querySelector('.header-btn-three');
// const main = document.querySelector('.home-page');

// btn1.addEventListener('click', () => {
//     main.classList.remove('hidden');
// });

// btn2.addEventListener('click', () => {
//     main.classList.add('hidden');
// });

// btn3.addEventListener('click', () => {
//     main.classList.add('hidden');
// });




