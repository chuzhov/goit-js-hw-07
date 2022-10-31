import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector("ul.gallery");

let htmlString = "";
galleryItems.forEach(element => {
    htmlString+=
    `<li><a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
        />
    </a></li>`
});
galleryWrapper.insertAdjacentHTML("afterbegin", htmlString);

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: "alt", captionDelay: 250 });
lightbox.on('show.simplelightbox');


console.log(galleryItems);
