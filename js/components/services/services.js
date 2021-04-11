import { isValidServices } from './isValidServices.js';
import { isValidServiceItem } from './isValidServiceItem.js';

function services(selector, data) {
    // input validation
    if (!isValidServices(selector, data)) {
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const { list, maxCount } = data;

    let HTML = '';
    let generatedServicesCount = 0;

    for (let i = 0; i < list.length; i++) {
        const service = list[i];

        if (!isValidServiceItem(service) ||
            !service.active) {
            continue;
        }
        if (generatedServicesCount === maxCount) {
            break;
        }

        generatedServicesCount++;
        HTML += `<div class="service-item">
                    <i class="${service.link}"></i>
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>    
                </div>`;
    }

    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { services }