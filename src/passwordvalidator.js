/**
 * 
 * @param {string} password 
 */
function isValidPassword(password) {
    return (password.length >= 6);
}
  
module.exports = isValidPassword