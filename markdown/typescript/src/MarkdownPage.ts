import {Anchor} from "./Anchor";

export class MarkdownPage {
    constructor(private readonly rawMarkdown: string) {

    }

    moveLinksToFootNotesWithAnchors(): MarkdownPage {
        const anchors = this.createAnchorsDictionary(
            this.findAnchorsAtPage(this.rawMarkdown)
        );
        const replacedText = this.replaceAnchors(this.rawMarkdown, anchors)
        return new MarkdownPage(this.addFootNotes(replacedText, anchors));
    }

    private createAnchorsDictionary(anchors: Array<Anchor>) {
        const createDictionaryFromAnchors = (total: Record<string, Anchor>, current: Anchor, index: number) => {
            return {...total, [`[^anchor${index + 1}]`]: current}
        };
        const anchorsDictionary = anchors.reduce(createDictionaryFromAnchors, {})
        return anchorsDictionary;
    }

    private findAnchorsAtPage(text: string): Array<Anchor> {
        const anchors: Array<Anchor> = new Array<Anchor>()

        if (this.containsAnchor(text)) {
            const openingTag = "["
            const closingTag = ")";
            const closingTagPosition = text.indexOf(closingTag);
            const openingTagPosition = text.indexOf(openingTag)

            const anchorExpression = text.substring(openingTagPosition, closingTagPosition + closingTag.length)
            const rest = text.substring(closingTagPosition + closingTag.length)
            const anchor = Anchor.fromMarkdownExpression(anchorExpression)
            anchors.push(anchor)

            const results = this.findAnchorsAtPage(rest);
            results.forEach(item => {
                const alreadyInList = anchors.find((current) => current.isEqual(item));
                if (!alreadyInList) {
                    anchors.push(item)
                }
            })
        }
        return anchors
    }

    private replaceAnchors(inputContent: string, anchorsDictionary: Record<string, Anchor>): string {
        const replaceLinkWithAnchor = (content: string, key: string) => {
            return content.replace(
                anchorsDictionary[key].toMarkdownExpression(),
                `${anchorsDictionary[key].text} ${key}`
            )
        };
        return Object.keys(anchorsDictionary).reduce(replaceLinkWithAnchor, inputContent)
    }

    private addFootNotes(text: string, anchorsDictionary: Record<string, Anchor>): string {
        const anchorToFootnote = (footnoteKey: string) => `${footnoteKey}: ${anchorsDictionary[footnoteKey].url}`;
        return [
            text,
            ...Object.keys(anchorsDictionary).map(anchorToFootnote)
        ].join("\n\n")
    }

    private containsAnchor(text: string) {
        return text.match(/.*\[.*?\]\(.*?\).*/);
    }

    plainText() {
        return this.rawMarkdown
    }
}