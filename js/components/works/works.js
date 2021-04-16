function works (selector, data) {
    
    console.log(data);
 
    const DOM = document.querySelector(selector);
    const worksArrey = data.list;
    const imgPath = data.imgPath;

    let HTML = '';

    for (let i=0; i < worksArrey.length; i++) {
        const work = worksArrey[i];
        console.log(work);

        HTML += `<div class="col-12 col-sm-6 col-md-4 work-item ">  
                <img src="${imgPath + work.img}" + alt="">                         
                </div>`;
    }
   
    DOM.innerHTML = HTML;
}

export { works }