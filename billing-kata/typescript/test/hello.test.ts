import {hello} from "../src";

describe('Hello', () => {
  it('should say hello', () => {
    expect(hello()).toEqual('Hello')
  });
});