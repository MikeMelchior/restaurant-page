import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');



    btn.innerHTML = "click me";


    element.appendChild(btn)

    return element
}
  
document.body.appendChild(component());

