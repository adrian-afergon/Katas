export class Wrapper {

  private static whiteSpace = ' '

  static takeNextLineFromText(text: string, result: string, limit: number) {
    return text.substring(result.length, result.length + limit)
  }

  static cutLineUntilLastWhiteSpace = (line: string) => {
    const whiteSpacePosition = line.lastIndexOf(Wrapper.whiteSpace)
    return line.substring(0, whiteSpacePosition)
  }

  static wrap(text: string, limit: number): string {
    const newLine = '\n'
    let result = ''

    if (text.length <= limit) {
      return text
    }

    while (result.length < text.length) {
      const line = Wrapper.takeNextLineFromText(text, result, limit)
      const futureResultLength = result.length + line.length;
      const isNextCharacterWhiteSpace = text[futureResultLength] === Wrapper.whiteSpace;
      const isLastLine = futureResultLength === text.length
      if (isNextCharacterWhiteSpace || isLastLine) {
        result += (line)
        if (!isLastLine) {
          result += newLine
        }
      } else {
        result += (Wrapper.cutLineUntilLastWhiteSpace(line) + newLine)
      }
    }

    return result
  }
}