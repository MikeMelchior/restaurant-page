import egg1 from './egg1.png'
import egg2 from './egg2.png'

export const homePage = (function() {
    const element = document.createElement('div');
    element.classList.add('main-content','home');

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('title-container');

    const para = document.createElement('p');
    para.textContent = 'Eggcelent Breakfast Buffet'

    const img = document.createElement('img');
    img.classList.add('title-img')
    img.src = egg1

    titleContainer.append(img)
    titleContainer.appendChild(para);

    element.appendChild(titleContainer)

    const img2 = document.createElement('img');
    img2.classList.add('testimonial-img');
    img2.src = egg2;

    element.appendChild(img2)

    return {
        element: element,
    }

})();