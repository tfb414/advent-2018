// Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

// The boxes will have IDs which differ by exactly one character at the same position in both strings.For example, given the following box IDs:

// abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// The IDs abcde and axcye are close, but they differ by two characters(the second and fourth).However, the IDs fghij and fguij differ by exactly one character, the third(h and u).Those must be the correct boxes.

// What letters are common between the two correct box IDs ? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

const fs = require("fs");
const clone = require("lodash/clone");
const pullAt = require("lodash/pullAt");

const main = () => {
  const input = fs
    .readFileSync("./input1")
    .toString()
    .split(/\n/g);

  const lengthOfStrings = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];

  let charCodeObject = {};
  let pairs = [];
  let matchedPairs = [];

  lengthOfStrings.forEach((elm, lengthOfStringsIndex) => {
    input.forEach((elm, i) => {
      const removeSingleLetter = elm.split("");
      removeSingleLetter.splice(lengthOfStringsIndex, 1);
      let newElm = removeSingleLetter.join("");

      const charValue = getTotalCharValue(newElm);
      if (!charCodeObject[charValue]) {
        charCodeObject[charValue] = [newElm];
      } else {
        charCodeObject[charValue].push(newElm);
      }
      if (charCodeObject[charValue].includes(newElm)) {
        if (pairs.includes(newElm)) {
          matchedPairs.push(newElm);
        }
        pairs.push(newElm);
      }
    });
  });

  console.log(matchedPairs[8]);
  console.log(matchedPairs[11]);

  const answer = matchedPairs.map(elm => {
    if (matchedPairs.includes(elm)) {
      return matchedPairs.indexOf(elm);
    }
  });

  console.log(answer);
};

const getTotalCharValue = input => {
  let total = 0;
  input.split("").forEach(elm => {
    total += elm.charCodeAt(0);
  });
  return total;
};

main();
