import {helloWorld} from "../index";

function add(command: string): number | undefined {

  if(!command) {
    return 0
  }

  const numbers = command.split(",");
  let sum = 0;
  for(let number of numbers){
    const possibleNumber = Number(number)
    if (isNaN(possibleNumber)) {
      throw new Error('command contains not allowed character')
    }
    sum = sum + possibleNumber
  }

  return sum

}

describe('String Calculator', () => {

  it('should works', function () {
    expect(helloWorld()).toBe('Hello World')
  });

  it('should returns 0 given no commad', function () {
    expect(add('')).toBe(0)
  });

  it("should return the the command if the string.length = 1", function (): void {
    const command = 5
    expect(add(String(command))).toBe(5);
  })

  it("should throw an error if the first element of the command is not a number", function () {
    const wrongCommand = "a"
    expect(() => {
      add(wrongCommand)
    }).toThrowError()
  })

  it('should add numbers at command split by comma', () => {
    expect(add('1,1')).toBe(2)
    expect(add('1,1,1')).toBe(3)
  });

  it("should handle return line within the string"), () => {
    expect(add("1\n2,3")).toBe(6)
  }

});