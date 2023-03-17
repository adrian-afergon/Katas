import {Anchor} from "./Anchor";

export class MarkdownPage {
    constructor(private readonly inputContent: string) {

    }

    moveLinksToFootNotesWithAnchors() {
        const anchors = this.findAnchorsAtPage(this.inputContent)
        const createDictionaryFromAnchors = (total: Record<string, Anchor>, current: Anchor, index: number) => {
            return {...total, [`[^anchor${index + 1}]`]: current}
        };
        const anchorsDictionary = anchors.reduce(createDictionaryFromAnchors, {})

        const replacedText = this.replaceAnchors(this.inputContent, anchorsDictionary)
        return this.addFootNotes(replacedText, anchorsDictionary);
    }

    private findAnchorsAtPage(inputContent: string): Anchor[] {
        throw new Error('Not implemented yet')
    }

    private replaceAnchors(inputContent: string, anchorsDictionary: Anchor): string {
        throw new Error('Not implemented yet')
    }

    private addFootNotes(replacedText: string, anchorsDictionary: Anchor) {
        throw new Error('Not implemented yet')
    }
}