import { getImage } from './data';

const createThumbnails = () => {
  const fragment = document.createDocumentFragment();
  const thumbnailsList = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content;
  const imageList = getImage();

  imageList.forEach((photo)=> {
    const sketch = template.cloneNode(true);
    sketch.querySelector('.picture__img').src = photo.url;
    sketch.querySelector('.picture__img').alt = photo.description;
    sketch.querySelector('.picture__comments').textContent = photo.comments.length;
    sketch.querySelector('.picture__likes').textContent = photo.likes;

    fragment.appendChild(sketch);
  });

  thumbnailsList.appendChild(fragment);
};

export { createThumbnails };
