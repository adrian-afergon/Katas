const isValidPassword = require('./passwordvalidator')

describe('the password validator', () => {
  /*
    * min 6 chars
    * min 1 number
    * min 1 uppercase
    * min 1 lowercase
    */
  it('rejects a password with less than 6 chars', () => {
    expect(isValidPassword('qed')).toEqual(false)
  })
  it('accepts a password with more than 6 chars', () => {
    expect(isValidPassword('qedjhfl')).toEqual(true)
  })
})