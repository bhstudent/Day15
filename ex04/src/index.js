const mili = [10, 25, 4];

function myArr(mili) {
  "use strict";
  mili[0] = 4;
  mili[1] = 10;
  mili[2] = 25;
  //Only change code below this line

  //Only change code above this line
  return mili;
}

console.log(myArr(mili));
module.exports = myArr;