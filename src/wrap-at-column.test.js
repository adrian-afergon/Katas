const wrapAtColumn = require('./wrap-at-column')

describe('wrap at column length', () => {
  /**
   * "", 1 => ""
   * "hola", 8 => hola
   * "hola", 1 => h\no\nl\na
   * "hola que", 6 => hola\nque
   * "hola que tal", 6 => hola\nque\ntal
   * 1, 1 => throws Error
   * "asdas", "asdasd" => throws Error
   */
  it('returns blank string with in empty string', () => {
    expect(wrapAtColumn('', 1)).toEqual('')
  })
  it('returns the same string if column width is bigger', () => { 
    expect(wrapAtColumn('hola', 8)).toEqual('hola')
  })
})
