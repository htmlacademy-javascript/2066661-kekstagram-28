const idGenerator = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const randomNumber = (a, b) => {
  const minimal = Math.ceil(Math.min(a, b));
  const maximum = Math.floor(Math.max(a, b));
  const result = Math.random() * (maximum - minimal + 1) + minimal;
  return Math.floor(result);
};


const getRandomElement = (elements) => elements[randomNumber(0, elements.length - 1)];

export { randomNumber, getRandomElement, idGenerator };
