class HeaderLink {
    constructor(parentDOM, data) {
        this.parentDOM = parentDOM;
        this.data = data;
       this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidDOM) {
            return false;
        }
        if (!this.isValidData) {
            return false;
        }

        const DOM = this.parentDOM.querySelectorAll('.col-12')[0];
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;

        this.render();
    }

    isValidDOM() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const { href, text } = this.data;
        let HTML = `<a href="${href}">${text}</a>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML)
    }
}

export { HeaderLink }