export class Wrapper {

  static wrap(text: string, limit: number): string {

    const lineJump = '\n'
    const whiteSpace = ' '

    return text
      .split(' ')
      .reduce<string[]>((lines, word) => {

        if (lines.length === 0) {
          return [word]
        }

        const lastPosition = lines.length - 1
        const lastLine = lines[lastPosition]
        const futureLineLength = lastLine.length + word.length + whiteSpace.length

        return futureLineLength <= limit
          ? [...lines.slice(0, lastPosition), `${lastLine} ${word}`]
          : [...lines, word]
      }, []).join(lineJump)
  }
}