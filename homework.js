// find the longest word in a string
// split and reduce
var str = "The quick brown fox jumped over the lazy dog";

var res = str.split(" ");
// split the string into an array of words with separator "space"

// console.log(res)

var longest = res.reduce(function(a,b) {
  // a is what we want to compare; b is the previous compared string
	if (a.length > b.length) { // if the new string is longer
		return a; // the new string is the longest string
	} else {return b;} // otherwise the old string is still the longest
})

console.log(longest)


// find the largest number in array of array
// hint: forEach and reduce

var arrOfArr =
[
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
// output ==> [5, 27, 39, 1001]
var empty = [];
	arrOfArr.forEach(function(a){
		var bigNum = a.reduce(function (prev, curr) {
			if (prev > curr) {
				return prev;
			} else {
				return curr;
			}
		})
	empty.push(bigNum);
})
