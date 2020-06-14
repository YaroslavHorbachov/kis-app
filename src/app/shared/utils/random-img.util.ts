import { uniqueId, times } from 'lodash';

function generateRandomImgUrl() {
  const random = parseInt(uniqueId(), 10);

  return `https://picsum.photos/200/300?grayscale&blur=1&random=${random}`;
}

function generateRandomImgGallery(gallerySize: number) {
  return times(gallerySize, () => generateRandomImgUrl());
}

export const RandomImageUtils = {
  generateRandomImgUrl,
  generateRandomImgGallery,
};
