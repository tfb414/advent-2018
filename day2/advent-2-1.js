// To make sure you didn't miss any, you scan the likely candidate boxes again,
//counting the number that have an ID containing exactly two of any letter and then
//separately counting those with exactly three of any letter.
//You can multiply those two counts together to get a rudimentary checksum
//and compare it to what your device predicts.

// For example, if you see the following box IDs:

// abcdef contains no letters that appear exactly two or three times.
// bababc contains two a and three b, so it counts for both.
// abbcde contains two b, but no letter appears exactly three times.
// abcccd contains three c, but no letter appears exactly two times.
// aabcdd contains two a and two d, but it only counts once.
// abcdee contains two e.
// ababab contains three a and three b, but it only counts once.
// Of these box IDs, four of them contain a letter which appears exactly twice,
//and three of them contain a letter which appears exactly three times.Multiplying these together produces a checksum of 4 * 3 = 12.

// What is the checksum for your list of box IDs ?

const fs = require("fs");
const clone = require("lodash/clone");
const emptyAlphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
};

const main = () => {
  const input = fs
    .readFileSync("./input1")
    .toString()
    .split(/\n/g);
  let twoCount = 0;
  let threeCount = 0;

  input.forEach(entry => {
    const numberOfLetters = getNumberOfLetters(entry);
    twoCount += iterateCount(numberOfLetters, 2);
    threeCount += iterateCount(numberOfLetters, 3);
  });

  console.log(threeCount * twoCount);
};

const getNumberOfLetters = input => {
  let letterCount = clone(emptyAlphabet);
  let inputArray = input.split("");
  inputArray.forEach(letter => {
    letterCount[letter] += 1;
  });
  return letterCount;
};

const iterateCount = (obj, numberToCheck) => {
  return Object.entries(obj).filter(letter => {
    return letter[1] === numberToCheck;
  }).length
    ? 1
    : 0;
};

main();
