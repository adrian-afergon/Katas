const newLine = '\n'

const sumPositiveTextNumbers = (total: number, item: string) => {
  const number = Number(item)
  if (number < 0) {
    throw new Error('negatives not allowed')
  }
  if (number > 1000) {
    return total
  }
  return total + Number(item)
};

const extractCustomSeparator = (commandIndicator: string, input: string) => input
  .substring(commandIndicator.length, input.indexOf(newLine))

const extractTextFromInput = (input: string) => input
  .substring(input.indexOf(newLine) + newLine.length, input.length)

const parseInput = (commandIndicator:string, input: string): {separator: string, text: string} => input
  .startsWith(commandIndicator)
    ? {
      separator: extractCustomSeparator(commandIndicator, input),
      text: extractTextFromInput(input)
    } : {
      separator: ',',
      text: input
    }

export const add = (input: string): number => {

  const commandIndicator = '//'

  const { text, separator } = parseInput(commandIndicator, input)

  return text
    .replace(/\n/g, separator)
    .split(separator)
    .reduce(sumPositiveTextNumbers, 0)
}