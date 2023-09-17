const passwordBox=document.getElementById("password");
const length=20;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol = "!@#$%^&*()-_=+[]{}|;:'\",.<>?";

const allChars=upperCase + lowerCase +numbers+symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol [Math.floor(Math.random() * symbol.length)];


    while(length> password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}

function  copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

// function copyPassword() {
//     const passwordBox = document.getElementById("passwordBox");

//     // Select the text in the input element
//     passwordBox.select();

//     try {
//         // Attempt to copy the selected text to the clipboard
//         document.execCommand("copy");

//         // Handle success (you can also provide a user feedback message here)
//         console.log("Password copied to clipboard");
//     } catch (err) {
//         // Handle any errors that may occur during copying
//         console.error("Unable to copy password to clipboard: ", err);
//     }

//     // Deselect the text (optional)
//     passwordBox.blur();
// }



