import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onItemClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

function onItemClick(event) {
  gallery.addEventListener("keydown", evt => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });

  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="desc"/>`
  );
  const galleryItem = event.target.classList.contains("gallery__image");
  if (!galleryItem) {
    return;
  } else {
    instance.show();
  }
}
