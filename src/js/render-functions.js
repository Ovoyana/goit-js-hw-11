'use strict';

import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Очищуємо галерею перед відображенням нових зображень

  if (images.length === 0) {
    iziToast.info({
      title: 'Info',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    const lightbox = new SimpleLightbox('.gallery a'); // Ініціалізуємо SimpleLightbox для всіх посилань в галереї

    images.forEach((image) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const link = document.createElement('a');
      link.href = image.largeImageURL;
      link.setAttribute('data-lightbox', 'gallery');

      const img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;

      const details = document.createElement('div');
      details.classList.add('details');

      const likes = document.createElement('span');
      likes.textContent = `Likes: ${image.likes}`;

      const views = document.createElement('span');
      views.textContent = `Views: ${image.views}`;

      const comments = document.createElement('span');
      comments.textContent = `Comments: ${image.comments}`;

      const downloads = document.createElement('span');
      downloads.textContent = `Downloads: ${image.downloads}`;

      details.appendChild(likes);
      details.appendChild(views);
      details.appendChild(comments);
      details.appendChild(downloads);

      link.appendChild(img);
      card.appendChild(link);
      card.appendChild(details);

      gallery.appendChild(card);
    });

    lightbox.refresh(); // Оновлюємо SimpleLightbox після додавання нових елементів
  }
}

export function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}