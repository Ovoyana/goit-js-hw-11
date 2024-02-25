'use strict';

const API_KEY = '42540057-2630f4048f1d19f54e4f29ae2'; 

export function searchImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching images');
        }
  
        return response.json();
      })
      .then((data) => {
        if (data.hits.length === 0) {
          throw new Error('No results found');
        }
  
        return data.hits;
      });
}
