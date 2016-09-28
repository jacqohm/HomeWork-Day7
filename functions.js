// HomeWork Day 7 --
// Long Questions
// Long1
//
var words = ['hello', 'what', 'is', 'up', 'dude'];

var wordLength = words.map(function(hello) {
    return hello.length;
});

console.log(wordLength);

//  Short 4
var totalSum = [1, 2, 3, 4].reduce(function(a, b) {
  return a + b;
});

console.log(totalSum);

var totalMul = [1, 2, 3, 4].reduce(function(a, b) {
  return a * b;
});

console.log(totalMul);

// Short 7

var strArr = ["hello", "im", "fantastic"];

var findlongestWord = strArr.reduce( function(prev, curr){
// console.log('prev: ' + prev);
// console.log('curr: ' + curr);

if(prev.length > curr.length) {
    return prev.length
 } else {
    return curr.length
 }
});

console.log(findlongestWord);

// Short 8
// Write a function filterLongWords that takes an array of words and a number x and returns a new array of words that are longer than x characters long.

var fruits = ["apple", "honeydew", "pear", "watermelon"];


var longWord = fruits.filter (x);
function x(wordLength){
  return wordLength.length > 6;
};
console.log(longWord);
