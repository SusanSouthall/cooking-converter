var number1 = parseInt(prompt("volume in cups"));

var tableSpoon = function(number1) {
	return number1 * 16;
};

var teaSpoon = function(number1) {
	return number1 * 48;
  };
var gallon = function(number1) {
	return number1 / 16;
  };

var result = gallon(number1);

alert(result);
