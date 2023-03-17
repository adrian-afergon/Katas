class FileSystem {
    exists(inputFile: string): boolean {
        throw new Error('Not implemented yet')
    }

    readContent(inputFile: string): string {
        throw new Error('Not implemented yet')
    }

    write(outputFile: string, transformedMarkDown: void): void {
        throw new Error('Not implemented yet')
    }
}

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

    private turnLinksIntoFooter(inputContent: string) {
        throw new Error('Not implemented yet')
    }
}