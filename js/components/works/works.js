function works (selector, data) {
    const DOM = document.querySelector(selector);   
           
        const {list, imgPath} = data; 
         let HTML = '';       
        
         for (let i = 0; i < list.length; i++) {
             const work = list[i];
                        
             HTML += `<div class = "gallery">
                        <div class = "gallery-item">                                        
                            <img src = "${imgPath + work.img}" alt="${work.alt}" > 
                            <div class = "content" >   
                                <button class = "plus-link"> 
                                    <i class = "plus"></i>   
                                </button>
                                <h5>                                        
                                    <a href = # > Our Photography </a>
                                </h5>                                                
                            </div>
                        </div>
                    </div>`                          
        }
         DOM.innerHTML = HTML;
         
         
    }

   

export { works } 



     /*    <div class = "gallery" ></div>                            
                                    
   */