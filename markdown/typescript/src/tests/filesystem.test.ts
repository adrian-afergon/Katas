import {FileSystem} from "../fileSystem";
import * as fs from "fs";

describe('FileSystem', () => {
    const fileSystem = new FileSystem()
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

        expect(content).toBe(fileContent)
    });

    it('write content into a file', () => {
        const contentToBeWritten = 'irrelevant content to be writed';
        fileSystem.write(inputFile, contentToBeWritten)

        const fileContent = fs.readFileSync(inputFile).toString();
        expect(fileContent).toBe(contentToBeWritten)
    });

});