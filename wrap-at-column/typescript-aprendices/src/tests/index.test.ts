import {Wrapper} from "../index";

function wordWrap(text: string, maxLineLength: number) {
  if (maxLineLength < 1) {
    throw new Error(`Max Line length ${maxLineLength} is lower than 1`)
  }
  return text;
}

describe('Wrap at column should', () => {

/*
  "" , 10 => ""
  " ", 10 => " "
  text, -1 | 0 => Throw Exception
  hola, 7 => hola\\\
  hola Ari, 7 => hola Ari
  hola Ari, 4 => hola\nAri
  hola Ari, 3 => hol\na\nAri
  " hola", 4 => " hola"
* */

  it('returns an empty output given an empty input', () => {
    expect(wordWrap("",1)).toBe("")
  });

  it('returns a white space given a white space', () => {
    expect(wordWrap(" ",1)).toBe(" ")
  });

  it('throws an exception given a max line length lower than 1', () => {
    expect(() => wordWrap("hola",0)).toThrow("Max Line length 0 is lower than 1")
  });


});