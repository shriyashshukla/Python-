function isPalindrome(str){
    const lowerStr = str.toLowerCase();

    const reversedStr =lowerStr.split('').reverse().join('');

    return lowerStr === reversedStr;
	
}


console.log (isPalindrome('naman'));
console.log (isPalindrome('hello'));
console.log(isPalindrome('madam'));