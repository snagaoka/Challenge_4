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
	var palindromeNumber = 0;
	// do your work here


	// 
	for (factor_0 = 100; factor_0 < 1000; factor_0++) {
		for (factor_1 = 100; factor_1 < 1000; factor_1++) {
			var product = factor_0 * factor_1;
			var numberString = product.toString();
			if(numberString === numberString.split('').reverse().join('')){
				console.log(numberString + ' is a palindrome');
			};

			// Need to sort numberString


			// return last item in array


			return largestPalindrome;
		};
	};

  


	return {
		factor_0 : factor_0,
		factor_1 : factor_1,
		palindromeNumber : palindromeNumber
	};
};