const headerData = {
    headerLink: {
        type: 'link',
        href: '#',
        text: 'Arika'
    },
    nav: [
        {
            type: 'text',
            href: '#',
            text: 'Home',
            submenu: [
                {type: 'link', href: '#', text: 'Home Option 1'},
                {type: 'link', href: '#', text: 'Home Option 2'}
            ]
        },
        {type: 'link', href: '#', text: 'About'},
        {type: 'link', href: '#', text: 'Services'},
        {type: 'link', href: '#', text: 'Portfolio'},
        {type: 'link', href: '#', text: 'Blog'},
        {type: 'link', href: '#', text: 'Contact'},
        {
            type: 'text',
            href: '#',
            text: 'Pages', 
            submenu: [
                {type: 'link', href: '#', text: 'About me'},
                {type: 'link', href: '#', text: 'Services'},
                {type: 'link', href: '#', text: 'Portfolio'},
                {type: 'link', href: '#', text: 'Contact'}
            ] 
        }

    ],
    icons: {
         link: ['fa fa-facebook', 'fa fa-twitter', 'fa fa-instagram', 'fa fa-linkedin']
    }
}

export { headerData }