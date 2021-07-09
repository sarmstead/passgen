// const emoji = require('node-emoji');
// let emojiArray = [];
// const randomEmojis = (length) => {
//     for (i = 0; i < length; i++) {
//         emojiArray.push(' :' + emoji.random()['key'] + ': ');
//     }
//     return emojiArray;
// }

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = `!@#$%^&*()_+=-{}][":;'?><,.~]`;


const generatePassword = (length, chars) => {
    let password = '';
    for (i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password;
}

const createPassword = (length = 130, hasNumbers = true, hasSymbols = true, hasEmojis = true) => {
    let chars = alpha;
    hasNumbers ? (chars += numbers) : '';
    hasSymbols ? (chars += symbols) : '';
    return generatePassword(length, chars);
}

module.exports = createPassword;