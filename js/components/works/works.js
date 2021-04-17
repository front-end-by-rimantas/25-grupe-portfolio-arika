function works (selector, data) {
    
    console.log(data);
 
    const DOM = document.querySelector(selector);
    const {list, imgPath} = data;
   
    let HTML = '';

    for (let i=0; i < list.length; i++) {
        const work = list[i];
        console.log(work);

        HTML += `<div class=" work-item ">  
                    <img src="${imgPath + work.img}" alt="">   
                  
                    <a href = "#">Our Photography</a>                                           
                </div>`;
    }
    
    DOM.innerHTML = HTML;
}

export { works }