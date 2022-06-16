export const header = (function() {
    const element = document.createElement('header');
    element.classList.add('header');


    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    let btn = document.createElement('button');
    btn.classList.add('header-btn-one');
    btn.textContent = 'Home';
    nav.appendChild(btn);
    btn = document.createElement('button');
    btn.classList.add('header-btn-two');
    btn.textContent = 'Menu';
    nav.appendChild(btn);
    btn = document.createElement('button');
    btn.classList.add('header-btn-three');
    btn.textContent = 'Contact';
    nav.appendChild(btn);

    element.appendChild(nav);
    
    return {
        element: element,
    }
})();