/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the 
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
exports.largestPalindromeProduct = function(multiplicands, digits){
	var factor_0 = 0;	
	var factor_1 = 0;
	var palindromeNumber = 0; // largest palindrome found
	// do your work here


	// 
	for (x = 100; x < 1000; x++) {
		for (y = x; y < 1000; y++) { // y = x, x won't duplicate
			var product = x * y;
			var numberToString = product.toString();
			if(numberToString === numberToString.split('').reverse().join('')){
				console.log(numberToString + ' is a palindrome');
				
				// Need to find the largest palindrome number
				if(parseInt(numberToString) > palindromeNumber) {
					palindromeNumber = parseInt(numberToString);
					factor_0 = x;
					factor_1 = y;
				}
				
			}


			// return last item in array
			// var index = numberToString.lastIndexOf()
			// //var largestPalindrome = numberToString[numberToString.length-1];

			// return index;
		};
	};
  

	return {
		factor_0 : factor_0,
		factor_1 : factor_1,
		palindromeNumber : palindromeNumber
	};
};