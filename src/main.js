'use strict';

import { searchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import  'css-loader';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
    });
    
    return;
  }

  showLoader();

  searchImages(query)
    .then((images) => {
      renderImages(images);
    })
    .catch((error) => {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again.',
      });
      
    })
    .finally(() => {
      hideLoader();
    });
    searchForm.reset();
    
}


    