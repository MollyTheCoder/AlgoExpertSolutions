/*Write a function that takes in an array of integers and returns an array of length 2 representing the largest
 range of numbers contained in that array. The first number in the output array should be the first number in 
 the range while the second number should be the last number in the range. A range of numbers is defined as a 
 set of numbers that come right after each other in the set of real integers. For instance, the output array 
 [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers do not need to 
 be ordered or adjacent in the array in order to form a range. Assume that there will only be one largest range.*/
 
function largestRange(array) {
	
  var sortNumbers = array.sort(function(a, b){return a-b});
  var n = 1;
  var firstNumber = sortNumbers[0];
  var strings = firstNumber.toString() + ",";

  for(var i = 1;i < sortNumbers.length; i++) {
    var nextNumber = firstNumber + n;
    
    if(sortNumbers.indexOf(nextNumber) > -1) {
    	strings += nextNumber + ",";
      n++
    } else {
    	firstNumber = sortNumbers[i]
      strings += "false" + firstNumber.toString() + ",";
      n = 1;
    }
  }
  var sequence = strings.split("false")
   var sequences = sequence.reduce((r,v) => {
   	 var newSeq = v.substring(0, v.length - 1).split(",");
     r.push(newSeq)
     
     return r;
   }, [])
   
  var largestSequence = sequences.sort(function(a, b){return b.length-a.length});
  var output = []
  output.push(parseFloat(largestSequence[0][0]))
  output.push(parseFloat(largestSequence[0][largestSequence[0].length - 1]))

  return output;
}

// Do not edit the line below.
exports.largestRange = largestRange;
