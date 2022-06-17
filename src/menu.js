import egg from './egg.png';

const menuCard = function(text, price) {
    const element = document.createElement('div');
    element.classList.add('menu-card');

    const p = document.createElement('p');
    p.textContent = text;

    const cost = document.createElement('p');
    cost.classList.add('price');
    cost.textContent= price;
    
    element.appendChild(p);
    element.appendChild(cost);
    return element;
};

export const menuPage = (function() {
    const element = document.createElement('div');
    element.classList.add('main-content','menu');

    element.appendChild(menuCard('Eggs and Bacon', '$7.99'));
    element.appendChild(menuCard("Grandma's Eggs", '$5.50'));
    element.appendChild(menuCard('Burly Man Breakfast', '$9.50$'));
    element.appendChild(menuCard('Breakfast Burrito', '$4.99'));
    element.appendChild(menuCard('Omelette', '$5.99'));
    element.appendChild(menuCard('Western Omelette', '$6.50'));

    return {
        element: element,
    }
})();