import './style.css';
import { header } from './header';
import { homePage } from './homePage';
import { menuPage } from './menu';
import { contactPage } from './contact';
import { footer } from './footer';
import egg1 from './egg1.png'

document.body.appendChild(header.element);

function content() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');


    return element;
};

document.body.appendChild(content());

document.body.appendChild(footer.element);


const main = document.querySelector('#content');
main.appendChild(homePage.element);

const homeBtn = document.querySelector('.header-btn-one');
homeBtn.addEventListener('click', (e) => {
    homeBtn.classList.toggle('active-btn')
})

