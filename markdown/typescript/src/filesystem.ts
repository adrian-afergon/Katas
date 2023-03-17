import * as fs from "fs";

export class FileSystem {
    exists(inputFile: string) {
        return fs.existsSync(inputFile)
    }

    readContent(inputFile: string): string {
        return fs.readFileSync(inputFile).toString()
    }

    write(outputFile: string, transformedMarkDown: string): void {
        fs.writeFileSync(outputFile, transformedMarkDown)
    }
}