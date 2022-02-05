/**
 * 
 * @param {string} password 
 */
function isValidPassword(password) {

    return hasMinimumLength(password)
        && containsDigit(password)
        && containsUpperCase(password)
        && containsLowerCase(password);
}

function hasMinimumLength(text) {
    return text.length >= 6;
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