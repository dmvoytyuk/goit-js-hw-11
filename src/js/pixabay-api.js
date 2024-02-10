import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.createElement('ul');
document.body.prepend(galleryList);
galleryList.classList.add('gallery');

const imagesList = images
  .map(
    image =>
      `<li class="gallery-item">
            <a class="gallery-link" href="${image.original}">
              <img src="${image.preview}" alt="${image.description}" data-source="${image.original}" width="360" height="200">
            </a>
          </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', imagesList);

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
