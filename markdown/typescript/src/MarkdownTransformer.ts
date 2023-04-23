import {MarkdownPersistence} from "./MarkdownPersistence";

export class MarkDownTransformer {
    constructor(private fileSystem: MarkdownPersistence = new MarkdownPersistence()) {}

    transform(inputFilePath: string, outputFilePath: string) {
        if(!this.fileSystem.exists(inputFilePath)) {
            throw new Error("Input file does not exists")
        }
        if(this.fileSystem.exists(outputFilePath)) {
            throw new Error("Output file already exists")
        }
        const markdownPage = this.fileSystem.readContent(inputFilePath)
        const transformedMarkDown = markdownPage.moveLinksToFootNotesWithAnchors()
        this.fileSystem.writeContent(outputFilePath, transformedMarkDown)

    }
}