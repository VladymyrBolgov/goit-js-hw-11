
import axios from "axios";
import Notiflix from "notiflix";

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-form__input');
const loadMoreBtnEl = document.querySelector('load-more');

let page = 1;

formEl.addEventListener('submit', getData);
loadMoreBtnEl.addEventListener('click', moreContent);

function getData(event) { 
    event.preventDefault();
    const searchValue = event.target.searchQuery.value;
    if (searchValue === '') {
        galleryEl.innerHTML = '';
        return;
    }
    getRequest(searchValue)
    .then(renderGallery)
    .catch(error => console.log(error))
}

async function getRequest(value, step) {
    const url = `https://pixabay.com/api/?key=29230094-1d6fe7151785ccfc3d660c9e4&q=${value}&image_type=photo&orientation=horizontal&safesearc=true&per_page=40&page=${step}`;
      try {
          const response = await axios.get(url);
          return response.data
      } catch (error) {
        console.log(error)
      }
}

function renderGallery(info) {
    page += 1;
    galleryEl.innerHTML = '';
    
    if (info.hits.length === 0) {
        galleryEl.innerHTML = '';
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return
    }
        const markup = info.hits
            .map(
                ({
                    largeImageURL,
                    webformatURL,
                    tags,
                    likes,
                    views,
                    comments,
                    downloads,
                }) =>
                    `<a class="gallery__link" href="${largeImageURL}">
                        <div class="photo-card">
                            <div class="gallery__thumb">
                                <img class="gallery__img" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                            </div>
                            <div class="gallery-info__box">
                                <p class="gallery-info__item">
                                    <b>Likes: <br>${likes}</b>
                                </p>
                                <p class="gallery-info__item">
                                    <b>Views: <br>${views}</b>
                                </p>
                                <p class="gallery-info__item">
                                    <b>Comments: <br>${comments}</b>
                                </p>
                                <p class="gallery-info__item">
                                    <b>Downloads: <br>${downloads}</b>
                                </p>
                            </div>
                        </div></a>`
            )
            .join("");
        
        galleryEl.insertAdjacentHTML('beforeend', markup);
         new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionPosition: 'bottom',
            animationSpeed: 250,
        });
        lightBox.refresh(); 
        return galleryEl;
    };

function moreContent () {
    getRequest();
  }
