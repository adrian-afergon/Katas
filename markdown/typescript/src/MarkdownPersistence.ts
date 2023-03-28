import * as fs from "fs";
import {MarkdownPage} from "./MarkdownPage";

export class MarkdownPersistence {
    exists(filePath: string) {
        return fs.existsSync(filePath)
    }

    readContent(filePath: string): MarkdownPage {
        return new MarkdownPage(fs.readFileSync(filePath).toString())
    }

    writeContent(filePath: string, transformedMarkDown: MarkdownPage): void {
        fs.writeFileSync(filePath, transformedMarkDown.plainText())
    }
}