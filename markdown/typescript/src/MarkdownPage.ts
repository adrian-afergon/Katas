import {Anchor} from "./Anchor";
import {Anchors} from "./Anchors";

export class MarkdownPage {
    constructor(private readonly rawMarkdown: string) {

    }

    moveLinksToFootNotesWithAnchors(): MarkdownPage {
        const anchors = Anchors.fromList(
            this.findAnchorsAtPage(this.rawMarkdown)
        );
        const replacedText = this.replaceAnchors(this.rawMarkdown, anchors)
        return new MarkdownPage(this.addFootNotes(replacedText, anchors));
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

    private replaceAnchors(inputContent: string, anchorsDictionary: Anchors): string {
        const replaceLinkWithAnchor = (content: string, key: string) => {
            return content.replace(
                anchorsDictionary.value[key].toMarkdownExpression(),
                `${anchorsDictionary.value[key].text} ${key}`
            )
        };
        return Object.keys(anchorsDictionary.value).reduce(replaceLinkWithAnchor, inputContent)
    }

    private addFootNotes(text: string, anchorsDictionary: Anchors): string {
        const anchorToFootnote = (footnoteKey: string) => `${footnoteKey}: ${anchorsDictionary.value[footnoteKey].url}`;
        return [
            text,
            ...Object.keys(anchorsDictionary.value).map(anchorToFootnote)
        ].join("\n\n")
    }

    private containsAnchor(text: string) {
        return text.match(/.*\[.*?\]\(.*?\).*/);
    }

    plainText() {
        return this.rawMarkdown
    }
}