import { getImage } from './data';
import { thumbnailsList } from './gallery.js';

const createThumbnails = () => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#picture').content;
  const imageList = getImage();

  imageList.forEach((photo)=> {
    const sketch = template.cloneNode(true);
    sketch.querySelector('.picture__img').src = photo.url;
    sketch.querySelector('.picture__img').alt = photo.description;
    sketch.querySelector('.picture__comments').textContent = photo.comments.length;
    sketch.querySelector('.picture__likes').textContent = photo.likes;
    sketch.querySelector('.picture').dataset.thumbnailId = photo.id;

    fragment.appendChild(sketch);
  });

  thumbnailsList.appendChild(fragment);
  return imageList;
};

export { createThumbnails };
