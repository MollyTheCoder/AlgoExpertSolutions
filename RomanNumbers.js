
let numeralNumbers = {
	'Y': 5000,
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}
//given a number in Roman numeral format, convert it to decimal
function returnDecimal(numeral) {  
  return numeral.split('').map(elem => numeralNumbers[elem]).reduce((r,o,i, array) => (array[i+1] === o*5 || array[i+1] === o*10) ? r-o : r+o, 0) 
}

//should return 1994
returnDecimal('MCMXCIV')