import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImgs } from './js/render-functions';
import { getImage } from './js/pixabay-api';

export const setGallery = document.querySelector('ul.gallery');
export let imgCollection;
export let searchImgs;

export const perPage = 15;
export let addPage = 1;



const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');
const addImgs = document.querySelector('#addImg');

const preloader = document.querySelector('.preloader');



const showLoader = () => {
  preloader.style.display = 'flex';
};
const hideLoader = () => {
  preloader.style.display = 'none';
};
const handleLoad = () => {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
};


fillForm.addEventListener('submit', async event => {
  event.preventDefault();
  addPage = 1;
  imgCollection = {};
  searchImgs = inputfield.value.trim();

  

  if (!searchImgs.length) {
    iziToast.error({
      color: 'yellow',
      message: ` Please enter a search query!.`,
      position: 'center',
    });
    setGallery.innerHTML = '';
    return;
  }

  showLoader();

  try {
    imgCollection = await getImage();

    if (!imgCollection.length) {
      iziToast.error({
        color: 'red',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'center',
      });
      addImgs.style.display = 'none';
      return;
    }

    if (perPage <= imgCollection.length) {
      addImgs.style.display = 'flex';
    } else {
      iziToast.info({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'center',
      });
    }
    renderImgs(imgCollection);
    scroll();
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      position: 'center',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});


addImgs.addEventListener('click', async event => {
  event.preventDefault();

  addPage += 1;

  showLoader();
  try {
    imgCollection = await getImage();

    if (perPage > imgCollection.length) {
      iziToast.info({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'center',
      });
      addImgs.style.display = 'none';
      return;
    }

    renderImgs(imgCollection);
    scroll();

  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});
window.onload = handleLoad;



