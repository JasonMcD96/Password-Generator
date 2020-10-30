// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var specialChars = ['!', '"', '#', '$', '%', '&', '\'', '(', ')',
    '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
    '@', '[', '\\', ']', '^', '_', '`', '{', '}', '|', '~'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//codes
const numsKey = 0;
const lowersKey = 1;
const capsKey = 2;
const specialsKey = 3;

//used as an upper limit to generate a random number
//random number is used to select one of the above arrays
const arrayChoiceLimit = 4;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

//generates password
function generatePassword() {
    var generatedString = "";
    var useNums = false;
    var useLower = false;
    var useCaps = false;
    var useSpecial = false;
    var flag = true;
    var length = 0;

    //get criteria
    while (flag) {
        useNums = confirm("Would you like to use numbers? (Click cancel for no)");
        useLower = confirm("Would you like to use lower case letters? (Click cancel for no)");
        useCaps = confirm("Would you like to use capital letters? (Click cancel for no)");
        useSpecial = confirm("Would you like to use special characters? (Click cancel for no)");

        if (useNums === false && useLower === false && useCaps === false && useSpecial === false) {
            alert("Error: Please say yes to at least one option");
        } else {
            flag = false;
        }
    }

    flag = true;
    var valid = false;

    while (flag) {
        //input should be a whole number where 8 <= input <= 128
        input = prompt("How long do you want your password to be? (between 8 and 128 characters)");

        valid = validateInput(input);
        if (valid === false) {
            alert("Error: Please enter a number between 8 and 128");
        } else {
            flag = false;
            length = parseInt(input);
        }
    }

    //now generate the password based on criteria
    while (generatedString.length < length) {
        var newChar = '';
        var randNumber = rand(arrayChoiceLimit);

        if (randNumber === numsKey && useNums) {
            //generate a random number for string
            console.log("number");
            newChar = generateNumber();
            generatedString = generatedString + newChar;

        } else if (randNumber === lowersKey && useLower) {
            //generate a random lowercase letter
            console.log("lower");
            newChar = generateLowerLetter();
            generatedString = generatedString + newChar;

        } else if (randNumber === capsKey && useCaps) {
            //generate a random capital letter
            console.log("capital");
            newChar = generateCapitalLetter();
            generatedString = generatedString + newChar;

        } else if (randNumber === specialsKey && useSpecial) {
            console.log("special");
            //generate a random special character
            newChar = generateSpecial();
            generatedString = generatedString + newChar;
        }
    }
    return generatedString;

}//end of generatePassword();

// validateInput(input) takes a variable and checks for an int and is bewteen two numbers
function validateInput(input) {

    //make sure input is number first
    var num = parseInt(input);
    if (Number.isInteger(num) === false) {
        return false;
    }
    if (input < 8 || input > 128) {
        return false;
    }
    return true;
}

function generateNumber() {
    var newNum = numbers[rand(numbers.length)];
    return newNum;
}

function generateLowerLetter() {
    var newLetter = alphabet[rand(alphabet.length)];
    return newLetter;
}

function generateCapitalLetter() {
    var newLetter = alphabet[rand(alphabet.length)];
    return newLetter.toUpperCase();
}

function generateSpecial(){
    var newChar = specialChars[rand(specialChars.length)];
    return newChar;
}

//helper function rand(); makes it easier to generate a number
function rand(upperLimit) {
    return Math.floor(Math.random() * upperLimit)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
