import {MarkdownPersistence} from "../markdownPersistence";
import * as fs from "fs";
import {MarkdownPage} from "../MarkdownPage";

describe('FileSystem', () => {
    const fileSystem = new MarkdownPersistence()
    const inputFile = 'irrelevant.txt';

    beforeEach(() => {
        if (fs.existsSync(inputFile)) {
            fs.unlinkSync(inputFile)
        }
    })


    afterEach(() => {
        if (fs.existsSync(inputFile)) {
            fs.unlinkSync(inputFile)
        }
    })

    it('check if file exists', () => {
        fs.writeFileSync(inputFile, 'irrelevant content')

        expect(fileSystem.exists(inputFile))
            .toBeTruthy()
    });

    it('read content from existing file', () => {
        const fileContent = 'irrelevant file content';
        fs.writeFileSync(inputFile, fileContent)
        const content = fileSystem.readContent(inputFile);

        expect(content.plainText()).toBe(new MarkdownPage(fileContent).plainText())
    });

    it('write content into a file', () => {
        const contentToBeWritten = new MarkdownPage('irrelevant content to be wrote');
        fileSystem.writeContent(inputFile, contentToBeWritten)

        const fileContent = fs.readFileSync(inputFile).toString();
        expect(fileContent).toBe(contentToBeWritten.plainText())
    });

});