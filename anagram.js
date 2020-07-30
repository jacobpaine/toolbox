var list = ["q", "bork", "bkor", "code", "doce", "i", "poi", "iop"];

const cleanString = (string) => {
  return string.toLowerCase().split("").sort().join();
};

const isItAnAnagram = (first, second) => {
  return cleanString(first) === cleanString(second);
};

const checkArray = (item, ind, array) => {
  for (let i = 0; i < array.length; i++) {
    if (ind === 0) return true;
    if (isItAnAnagram(item, array[i])) {
      if (ind < i) return true;
      if (ind > i) return false;
      return true;
    }
  }
};

const clearAnagramsFrom = (array) => {
  return array.filter(checkArray);
};

console.log("final list: ", clearAnagramsFrom(list));
