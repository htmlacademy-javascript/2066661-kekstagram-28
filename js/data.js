import { getRandomElement, idGenerator, randomNumber } from './util.js';

const NUMBER_IMAGES = 25;
const NUMBER_COMMENTS = {
  MIN: 0,
  MAX: 3
};
const NUMBER_AVATARS = 6;
const NUMBER_LIKES = {
  MIN: 15,
  MAX: 200
};

const NAMES = [
  'Илья',
  'Тимофей',
  'Павел',
  'Степан',
  'Егор',
  'Дарина',
  'Александра',
  'Ксения',
  'Ангелина',
  'Ирина',
  'Владимир',
];

const DESCRIPTIONS = [
  'Красивое фото',
  'Где такие виды?',
  'Что-то на идеальном',
  'не нравится',
  'куда ехать',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateID = idGenerator();

const createComment = () => ({
  id: generateID,
  avatar: `img/avatar-${randomNumber(1, NUMBER_AVATARS)}.svg`,
  messages: getRandomElement(COMMENTS),
  names: getRandomElement(NAMES),
});

const createImage = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: randomNumber(NUMBER_LIKES.MIN, NUMBER_LIKES.MAX),
  comments: Array.from({length: idGenerator(NUMBER_COMMENTS.MIN, NUMBER_COMMENTS.MAX)}, createComment),
});

const getImage = () => Array.from(
  {length: NUMBER_IMAGES},
  (_, photoIndex) =>
    createImage(photoIndex + 1));

export {getImage};


