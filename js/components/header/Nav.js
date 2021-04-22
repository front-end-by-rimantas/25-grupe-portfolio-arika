class Nav {
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

        console.log(this.parentDOM.querySelectorAll('.col-12')[0]);
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
    generateHTML(item) {
        let HTML = '';

        if (item.submenu) {
            const labelHMTL = item.type === 'link'
                ? `<a href="${item.href}" class="label">${item.text}</a>`
                : `<div class="label">${item.text}</div>`;

            let subMenuHTML = '';
            for (const subMenuItem of item.submenu) {
                subMenuHTML += this.generateHTML(subMenuItem);
            }

            HTML += `<div class="item dropdown ${item.submenuDirection}">
                        ${labelHMTL}
                        <div class="submenu">
                            ${subMenuHTML}
                        </div>
                    </div>`;
        } else {
            HTML += `<a href="${item.href}" class="item">${item.text}</a>`;
        }

        return HTML;
    }

    render() {
        let HTML = '';

        for (const item of this.data) {
            HTML += this.generateHTML(item);
        }

        this.DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
    }

}

export { Nav }