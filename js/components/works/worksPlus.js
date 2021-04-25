const gallery = document.querySelectorAll(".works-list .gallery-item");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current");
const totalImg = previewBox.querySelector(".total");
const background = document.querySelector(".background");
const dontAppear = document.querySelectorAll("h5");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let  newIndex = i;
        gallery[i].onclick = ()=>{
            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            prevBtn.onclick = ()=>{
                newIndex--;
                if (newIndex === -1) {
                    newIndex = 8;
                    preview();
                }
                preview();
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if (newIndex === 9) {
                    newIndex = 0;
                    preview();
                }
                preview();
            }

            preview();
            previewBox.classList.add("show");
            background.style.display = "block";

            closeIcon.onclick = ()=>{
                previewBox.classList.remove("show");
                background.style.display = "none";
            }
            background.onclick = ()=>{
                previewBox.classList.remove("show");
                background.style.display = "none";
            }
        }
    }
}    

export {worksPlus}    