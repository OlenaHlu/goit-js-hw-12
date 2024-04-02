import axios from 'axios';

import { searchImgs } from '../main.js';
import { addPage } from '../main.js';
import { perPage } from '../main.js';

export const getImage = async () => { 
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '43066959-f9f55707df0fe34b818b99119',
      q: searchImgs,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page: addPage,
    },
  });
  const result = response.data.hits;
  return result;
};