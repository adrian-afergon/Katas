/**
 * 
 * @param {string} password 
 */
function isValidPassword(password) {
    return isLengthGreaterThan(password, 6) && containsDigit(password) && containsUpperCase(password) && containsLowerCase(password);
}

function isLengthGreaterThan(text, number) {
    return text.length >= number;
}

function containsDigit(text) {
    return /\d/.test(text);
}

function containsUpperCase (text) {
    return /[A-Z]/.test(text)
}

function containsLowerCase (text) {
    return /[a-z]/.test(text)    
}
  
module.exports = isValidPassword