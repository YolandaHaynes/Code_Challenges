//You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return 180-(a+b);
  }
console.log((otherAngle(30, 60)))



//also my original solution was 

// function otherAngle(a,b) {
//     return 180 - a - b;
// }

//that passed as well however I went with the code above because I was thinking if I was working in neg number, but when I reread the description, I was only working with positive integers. 