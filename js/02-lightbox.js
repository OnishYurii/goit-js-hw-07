import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// const body = document.querySelector("body");
// const div = body.querySelector("div");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class='gallery__item'>
           <a class="gallery__link" href=${original}>
             <img class="gallery__image" src=${preview} alt="${description}" />
           </a>
         </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", openImgModal);

function openImgModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightboxInit();
}

function lightboxInit() {
  const lightbox = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  // gallery.on("close.simplelightbox", () => {
  //   div.classList.remove("sl-wrapper");
  // });
}
