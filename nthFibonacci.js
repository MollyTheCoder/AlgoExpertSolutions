/*The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, 
and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer
 n and returns the nth Fibonacci number.*/

 function getNthFib(n) {
	var fibonnacci = [0]

	for(var i = 0; i < n - 1; i++) {	
		var length = fibonnacci.length;
	  var lastNumber = fibonnacci[length - 1];
	  var anteLastNumber = length == 1 ? 1 :fibonnacci[length - 2];
	  var newNumber = lastNumber + anteLastNumber;
	  fibonnacci.push(newNumber)
	}
	var output = fibonnacci[fibonnacci.length - 1];
	
	return output;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
