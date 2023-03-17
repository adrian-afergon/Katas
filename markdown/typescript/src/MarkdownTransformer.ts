import {MarkdownPersistence} from "./markdownPersistence";
import {MarkdownPage} from "./MarkdownPage";

export class MarkDownTransformer {
    constructor(private fileSystem: MarkdownPersistence = new MarkdownPersistence()) {}

    transform(inputFilePath: string, outputFilePath: string) {
        if(!this.fileSystem.exists(inputFilePath)) {
            throw new Error("Input file does not exists")
        }
        if(this.fileSystem.exists(outputFilePath)) {
            throw new Error("Output file already exists")
        }
        const rawMarkdown = this.fileSystem.readContent(inputFilePath)
        const transformedMarkDown = this.turnLinksIntoFooter(rawMarkdown)
        this.fileSystem.writeContent(outputFilePath, transformedMarkDown)

    }

    private turnLinksIntoFooter(inputContent: string): string {
        return new MarkdownPage(inputContent).moveLinksToFootNotesWithAnchors()
    }
}