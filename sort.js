// So you need to get sorted?
// Sort changes all the elements into a string and sorts them in ascending order
const alphabet = [
  "a",
  "z",
  "b",
  "y",
  "c",
  "x",
  "d",
  "w",
  "e",
  "v",
  "f",
  "u",
  "g",
  "t",
  "h",
  "s",
  "i",
  "r",
  "j",
  "q",
  "k",
  "p",
  "l",
  "o",
  "m",
];

console.info("alphabet.sort(): ", alphabet.sort());

// Sometimes it gets problematic.
// Everything gets ordered by UTF-16. Capitals first. Test it out.
const someNumbers = [1, 2, "Z", 100, "a", "q", "z", "Q", "A", "!"];
console.info(someNumbers.sort());

// Finally, the most useful thing to do with .sort is to pass it a comparison function.

// Some numbers out of order.
const someArrayOfNumbers = [1, 19, 5, 9, 3];

// A function accepting two arguments.
// Sort subtracts the first argument (a) from the second argument (b).
// If the result is negative, a is put before b.
// If the result is positive, b is put before a.
// If the result is zero, nothing changes.
// This is a very rudimentary explanation of the sort. Algorithms are a special part of programming. If you're interested, check out https://www.khanacademy.org/computing/computer-science/algorithms.

// Otherwise, check out this code in your console.
const bySize = (a, b) => {
  return a - b;
};
console.info(someArrayOfNumbers.sort(bySize));

// You can also sort special character strings.
var items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
const withSpecialCharacters = (a, b) => {
  return a.localeCompare(b);
};
items.sort(withSpecialCharacters);

// You can even sort strings that aren't English.
const somePhrasesAboutTea = ["好喝", "綠茶", "清茶", "紅茶"];
const byLocale = (a, b) => {
  return a.localeCompare(b);
};
console.info(somePhrasesAboutTea.sort(byLocale));

// Last, for now, is that you can sort and array of objects.

var items = [
  { name: "Maggie", item: "shell", value: 1 },
  { name: "Milly", item: "star", value: 5 },
  { name: "Molly", item: "crab", value: 0 },
  { name: "May", item: "stone", value: null },
];

// sort by value
const objectByValue = (a, b) => {
  return a.value - b.value;
};
items.sort(objectByValue(items));

// sort by name 
// this example from the MDN docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
items.sort(function(a,b){
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
