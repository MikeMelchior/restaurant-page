export const footer = (function() {
    const element = document.createElement('footer');
    element.classList.add('footer');

    const para = document.createElement('p');
    para.classList.add('footer-text');

    para.textContent = 'Start your day off right with an Eggcelent breakfast!'

    element.appendChild(para);
    return {
        element: element,
    }
})();