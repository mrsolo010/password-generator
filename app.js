const passwordBox = document.getElementById("password");
const length = 15;

const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = ":;.?<>+=_-||]\{{}}))((``$#@^*";

const allChars = uperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    password += uperCase[Math.floor(Math.random() * uperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    Document.execCommand("copy");
}
