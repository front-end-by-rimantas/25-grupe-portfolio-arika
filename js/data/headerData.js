const headerData = {
    headerLink: {
        type: 'link',
        href: '#',
        text: 'Arika'
    },
    nav: [
        {
            type: 'link',
            href: '#',
            text: 'Home',
            submenu: [
                {type: 'link', href: '#', text: 'Home Option 1'},
                {type: 'link', href: '#', text: 'Home Option 2'}
            ],
            submenuDirection: 'bottom',
        },
        {type: 'link', href: '#', text: 'About'},
        {type: 'link', href: '#', text: 'Services'},
        {type: 'link', href: '#', text: 'Portfolio'},
        {type: 'link', href: '#', text: 'Blog'},
        {type: 'link', href: '#', text: 'Contact'},
        {
            type: 'link',
            href: '#',
            text: 'Pages', 
            submenu: [
                {type: 'link', href: '#', text: 'About me'},
                {type: 'link', href: '#', text: 'Services'},
                {type: 'link', href: '#', text: 'Portfolio'},
                {type: 'link', href: '#', text: 'Contact'}
            ],
            submenuDirection: 'bottom', 
        }

    ],
    icons: [
        {type: 'link', href: '#', text: 'fa fa-facebook'},
        {type: 'link', href: '#', text: 'fa fa-twitter'},
        {type: 'link', href: '#', text: 'fa fa-instagram'},
        {type: 'link', href: '#', text: 'fa fa-linkedin'}
    ]
    
}
console.log(headerData);

export { headerData }

