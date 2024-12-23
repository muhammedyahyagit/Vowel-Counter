var userInput = prompt("Enter a sentence");
input = userInput.toLowerCase();
vowelCount = 0;

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === 'a' || userInput[i] === 'e' || userInput[i] === 'i' || userInput[i] === 'o' || userInput[i] === 'u' ) {
        vowelCount++;
    }
    
}

alert("Total numbers of vowels" + vowelCount);