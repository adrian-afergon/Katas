import {fizzBuzz} from "../index";

describe('FizzBuzz Kata', () => {

  it('returns same numbers of lines given a quantity', () => {
    expect(fizzBuzz(1)).toBe('1')
    expect(fizzBuzz(2)).toBe('1\n2')
  });

  it('throws an exception given a quantity lower to 1', () => {
    expect(() => fizzBuzz(0)).toThrowError('Quantity lower than 1 is not allowed, your value was 0')
  });

  it('throws an exception given a quantity lower to 100', () => {
    expect(() => fizzBuzz(101)).toThrowError('Quantity higher than 100 is not allowed, your value was 101')
  });

  it('say Fizz instead the number for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('1\n2\nFizz')
  });

  it('say Buzz instead the number for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('1\n2\nFizz\n4\nBuzz')
  });

  it('say FizzBuzz instead the number for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe(`1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\nFizz\n14\nFizzBuzz`)
  });

  it('say Fizz instead the number if it contains a three', () => {
    expect(fizzBuzz(15)).toBe(`1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\nFizz\n14\nFizzBuzz`)
  });

  it('say Buzz instead the number if it contains a five', () => {
    expect(fizzBuzz(60)).toBe(
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n" +
      "11\nFizz\nFizz\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\n" +
      "Fizz\n22\nFizz\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n" +
      "Fizz\nFizz\nFizz\nFizz\nFizzBuzz\nFizz\nFizz\nFizz\nFizz\nBuzz\n" +
      "41\nFizz\nFizz\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\n" +
      "FizzBuzz\nBuzz\nFizzBuzz\nFizzBuzz\nBuzz\nBuzz\nFizzBuzz\nBuzz\nBuzz\nFizzBuzz"
    )
  });

});