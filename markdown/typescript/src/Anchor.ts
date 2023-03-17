export class Anchor {
    constructor(public readonly url: string, public readonly text: string) {

    }

    static fromMarkdownExpression(inputContent: string): Anchor {
        const separator = "](";
        const start = "[".length;
        const visibleText = inputContent.substring(start, inputContent.indexOf(separator))
        const closingTag = ")";
        const end = inputContent.indexOf(closingTag, start);
        const url = inputContent.substring(inputContent.indexOf(separator) + separator.length, end)

        return new Anchor(url, visibleText)
    }

    isEqual(item: Anchor) {
        return this.url === item.url && this.text === item.text;
    }
}