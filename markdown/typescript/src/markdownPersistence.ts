import * as fs from "fs";
import {MarkdownText} from "./MarkdownText";

export class MarkdownPersistence {
    exists(filePath: string) {
        return fs.existsSync(filePath)
    }

    readContent(filePath: string): MarkdownText {
        return fs.readFileSync(filePath).toString() as MarkdownText
    }

    writeContent(filePath: string, transformedMarkDown: MarkdownText): void {
        fs.writeFileSync(filePath, transformedMarkDown)
    }
}