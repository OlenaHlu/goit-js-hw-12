
import SimpleLightbox from 'simplelightbox';

export const setGallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

lightbox.refresh();

export function renderImgs(images) {

  images.forEach(image => {
    const imgGallery = `
      <li class="card">
        <a href="${image.largeImageURL}" class="link">
          <img src="${image.webformatURL}" alt="${image.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${image.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${image.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${image.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${image.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;
    setGallery.insertAdjacentHTML('beforeend', imgGallery);
  });
  lightbox.refresh();
}

