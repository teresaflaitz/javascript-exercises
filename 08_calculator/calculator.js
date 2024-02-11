const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach(item => total += item);
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(item => total *= item);
  return total;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let total = 1;
  while(x > 1) {
    total *= x;
    x--;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
