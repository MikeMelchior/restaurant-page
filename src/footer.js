export const footer = (function() {
    const element = document.createElement('footer');
    element.classList.add('footer');

    const para = document.createElement('p');
    para.classList.add('footer-text');

    para.textContent = 'Have an Eggcelent Day!'

    element.appendChild(para);
    return {
        element: element,
    }
})();