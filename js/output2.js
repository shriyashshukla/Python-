// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()) {
//       if(vowels.includes(char)) {
//         count++
//       }
//     }
//     return count
//   }



  const findVowels = str => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// Get user input using the prompt function
const userInput = prompt("Please enter a string:");

// Find the number of vowels in the input string
const vowelCount = findVowels(userInput);

// Display the result to the user
alert(`The number of vowels in the entered string is: ${vowelCount}`);
