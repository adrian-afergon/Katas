import {FileSystem} from "./filesystem";
import {MarkdownPage} from "./MarkdownPage";

export class MarkDownTransformer {
    constructor(private fileSystem: FileSystem = new FileSystem()) {}

    transform(inputFile: string, outputFile: string) {
        if(!this.fileSystem.exists(inputFile)) {
            throw new Error("Input file does not exists")
        }
        if(this.fileSystem.exists(outputFile)) {
            throw new Error("Output file already exists")
        }
        const inputContent = this.fileSystem.readContent(inputFile)
        const transformedMarkDown = this.turnLinksIntoFooter(inputContent)
        this.fileSystem.write(outputFile, transformedMarkDown)

    }

    private turnLinksIntoFooter(inputContent: string): string {
        return new MarkdownPage(inputContent).moveLinksToFootNotesWithAnchors()
    }
}