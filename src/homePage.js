import egg1 from './egg1.png';
import egg2 from './egg2.png';

export const homePage = (function() {
    const element = document.createElement('div');
    element.classList.add('main-content','home');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const para = document.createElement('p');
    para.textContent = 'Eggcelent Breakfast Buffet';

    const img = document.createElement('img');
    img.classList.add('title-img');
    img.src = egg1;

    titleContainer.append(img)
    titleContainer.appendChild(para);

    element.appendChild(titleContainer);

    const img2 = document.createElement('img');
    img2.classList.add('testimonial-img');
    img2.src = egg2;

    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial');

    const review = document.createElement('p');
    review.classList.add('review');
    review.textContent = "insert some great testimonial here from someone who really enjoyed the food.";

    const reviewer = document.createElement('p');
    reviewer.classList.add('reviewer');
    reviewer.textContent = "- Happy Customer";
    
    testimonial.appendChild(review);
    testimonial.appendChild(reviewer);
    element.appendChild(testimonial);
    element.appendChild(img2);

    return {
        element: element,
    }

})();