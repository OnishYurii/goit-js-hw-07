import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let fullSizeImg;
let imageRef;

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class='gallery__item'>
             <a class="gallery__link" href=${original}>
               <img class="gallery__image" src=${preview} alt="${description}" data-source=${original} />
             </a>
       </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  imageRef = event.target.dataset.source;
  // console.log(imageRef);
  lightboxInit();
}

function lightboxInit() {
  fullSizeImg = basicLightbox.create(
    `
    <img src=${imageRef} />`,
    {
      onShow: () => {
        window.addEventListener("keydown", modalCloseByEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", modalCloseByEscape);
      },
    }
  );

  fullSizeImg.show();
}

function modalCloseByEscape({ code }) {
  if (code === "Escape") {
    fullSizeImg.close();
  }
}
