function printMyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  return SENTENCE;
  // Only change code above this line
}
printMyTimes("Arena");
module.exports = printMyTimes;