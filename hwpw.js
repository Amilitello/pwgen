
// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

function passOptions() {
    var length = prompt("How many characters do you want in your password?")

    if (isNaN(length) === true) {
        alert("Password length must be a number")
        return
    }
    if (length < 8 || length > 128) {
        alert("Length must be between 8 and 128")
        return
    }
    var specChar = confirm("Click ok to confrim special Characters")
    var numberChar = confirm("Click ok to confrim number")
    var upperletterChar = confirm("Click ok to confrim upper case letter")
    var lowerletterChar = confirm("Click ok to confrim lower case letter")
    if (specChar === false && numberChar === false && upperletterChar === false && lowerletterChar === false) {
        alert("Must select at least one character type.")
        return

    }

    var passwordOptions = {
        length,
        specChar,
        numberChar,
        upperletterChar,
        lowerletterChar
    }
    return passwordOptions
}

function random(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomElement = array[randomIndex]
    return randomElement

}

// Generate noninclusive max index.

function getrandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function generatePassword() {
    var options = passOptions()
    var result = []
    var possibleChar = []
    var guarChar = []
    var userSelection = []


    // Letter aray to identify user selection.
    if (options.specChar) {
 
        userSelection.push("A")
    }
    if (options.numberChar) {

        userSelection.push("B")
    }
    if (options.upperletterChar) {

        userSelection.push("C")
    }
    if (options.lowerletterChar) {

        userSelection.push("D")

    }

    // Pick random character from user selection array.
    // Run appropriate function.
    // 
    console.log(userSelection)
    var userSelectionLength = userSelection.length
    for (start = 0; start < options.length; start++) {
        console.log(start);
        var selectedOption = userSelection[getrandomIndex(userSelectionLength)]
        console.log(selectedOption);
        switch (selectedOption) {

            case "A":
                guarChar.push(random(specialCharacters))
                break;
            case "B":
                guarChar.push(random(numbers))
                break;
            case "C":
                guarChar.push(random(upperCasedCharacters))
                break;
            case "D":
                guarChar.push(random(lowerCasedCharacters))
                break;
        }
        

    }
    console.log(guarChar)

    document.getElementById("password-output").innerHTML=guarChar.join("");

}



// create foreloop for options.lenght, loop through guarChar.lenght.

// wirte code that generates HTML inside of an HTML element.


// Assignment Code
/*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*(options.specChar){

            guarChar.push(random(specialCharacters))
            continue
        }
       // if (options.numberChar) {

            guarChar.push(random(numbers))
            continue
        }
       // if (options.upperletterChar) {
            guarChar.push(random(upperCasedCharacters))
            continue
        }
       // if (options.lowerletterChar) {

            guarChar.push(random(lowerCasedCharacters))

        } */






