import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector("div.gallery");

let htmlString = "";
galleryItems.forEach(element => {
    htmlString+=
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
        </a>
    </div>`
});
galleryWrapper.insertAdjacentHTML("afterbegin", htmlString);

galleryWrapper.addEventListener("click", callBasicLightbox); 

function callBasicLightbox(event)
{

    function addESClistener(event) {
        if (event.code==="Escape") {lb.close(()=>document.removeEventListener("keydown", addESClistener))}
    }
    
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return "";

    const lb = basicLightbox.create(`<img src=${event.target.dataset.source}>`);
    lb.show(()=>document.addEventListener("keydown", addESClistener));
      
}

console.log(galleryItems);
