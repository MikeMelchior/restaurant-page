import { add, concat } from "lodash";

const location = (address, phone, email) => {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    const addy = document.createElement('p');
    addy.textContent = address;

    const number = document.createElement('p');
    number.textContent = phone;

    const mail = document.createElement('p');
    mail.textContent = email;

    contactCard.appendChild(addy);
    contactCard.appendChild(number);
    contactCard.appendChild(mail);

    return contactCard;
    
};

export const contactPage = (function() {
    const element = document.createElement('div');
    element.classList.add('main-content','contact');

    const locations = document.createElement('p');
    locations.classList.add('locations');
    locations.textContent = "Locations";
    element.appendChild(locations);

    element.appendChild(location('123 Main street', '(111) 111-1111', 'someone@eggs.com'));
    element.appendChild(location('444 Eggs street', '(123) 456-7809', 'breakfast@email.com'));
    element.appendChild(location('1 Yummy Lane', '(888) 888-8888', 'delicious@food.org'));

    const thanks = document.createElement('p');
    thanks.classList.add('thanks');
    thanks.textContent = "Thanks for Visiting!";

    element.appendChild(thanks);
    
    return {
        element: element,
    }
})();