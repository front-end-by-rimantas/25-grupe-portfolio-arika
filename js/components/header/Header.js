import { HeaderLink } from './HeaderLink.js'; 
import { Nav } from './Nav.js';

class Header {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti jokio elemento');
            return false;
        }
        this.DOM = DOM;

        this.DOM.classList.add('header');

        this.render();
        // this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const HTML = `<div class="row"><div class="col-12 content"></div></div>`;
        this.DOM.innerHTML = HTML;

        const allDOM = this.DOM.querySelectorAll('.row');
        // const allDOM = this.DOM.querySelectorAll('.row');
        // console.log(allDOM);
        new HeaderLink(allDOM[0], this.data.headerLink);
        new Nav(allDOM[0], this.data.nav);
        
    }
}

export { Header }