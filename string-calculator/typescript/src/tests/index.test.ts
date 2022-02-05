import {add} from "../index";

describe('String Calculator', () => {
  it('returns 0 given an empty input', () => {
    expect(add('')).toBe(0)
  });

  it('returns addition of multiple numbers at input', () => {
    expect(add('1,2')).toBe(3)
    expect(add('1,2,3')).toBe(6)
  });

  it('handle new lines character as a separator', () => {
    expect(add('1\n2')).toBe(3)
    expect(add('1\n2\n3')).toBe(6)
  });

  it('supports custom separators', () => {
    expect(add('//.\n1.2')).toBe(3)
    expect(add('//.\n1.2.3')).toBe(6)
    expect(add('//rf\n1rf2rf3')).toBe(6)
  });

  it('throws an exception given negative numbers at input', () => {
    expect(() => add('-1')).toThrow(Error)
    expect(() => add('-1')).toThrow('negatives not allowed')

    expect(() => add('1,-1')).toThrow(Error)
    expect(() => add('1,2,-1')).toThrow('negatives not allowed')

    expect(() => add('//rf\n1rf2rf-3')).toThrow(Error)
    expect(() => add('//rf\n1rf2rf-3')).toThrow('negatives not allowed')
  });

  it('should ignore number bigger than 1000', () => {
    expect(add('//.\n1.1001')).toBe(1)
    expect(add('//.\n1.1000')).toBe(1001)
  });

});