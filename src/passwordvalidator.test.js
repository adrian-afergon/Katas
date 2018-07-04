const isValidPassword = require('./passwordvalidator')

describe('the password validator', () => {
  /*
    * min 6 chars
    * min 1 number
    * min 1 uppercase
    * min 1 lowercase
    */
  it('rejects a password with less than 6 chars', () => {
    expect(isValidPassword('H0la')).toEqual(false)
  })

  it('rejects a password without a number', () => {
    expect(isValidPassword('qeDjhf')).toEqual(false)
  })

  it('rejects a password without a uppercase', () => {
    expect(isValidPassword('h0la4ll')).toEqual(false)
  })

  xit('rejects a password without a lowercase', () => {
    expect(isValidPassword('H0LA4LL')).toEqual(false)
  })

  it('accepts a password', () => {
    expect(isValidPassword('qeDjhf6')).toEqual(true)
  })
})