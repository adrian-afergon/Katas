import {Wrapper} from "../index";

describe('Wrap at column', () => {

  it("returns one line given a text lower than columns", () => {
    expect(Wrapper.wrap("Hello", 5)).toEqual("Hello")
    expect(Wrapper.wrap("Hello", 8)).toEqual("Hello")
  })

  it('return multiple lines given a text bigger than column number', () => {
    expect(Wrapper.wrap("Hello son", 5))
      .toEqual("Hello\nson")

    expect(Wrapper.wrap('asd rfb asd', 3))
      .toEqual('asd\nrfb\nasd')
  });

  it('return multiple lines given a last line smaller than the column number', () => {
    expect(Wrapper.wrap("Hello darkness, my old friend", 12))
      .toEqual("Hello\ndarkness, my\nold friend")
  })

});