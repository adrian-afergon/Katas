/**
 * 
 * @param {string} password 
 */
function isValidPassword(password) {
    return (password.length >= 6) && /\d/.test(password) && /[A-Z]/.test(password);
}
  
module.exports = isValidPassword