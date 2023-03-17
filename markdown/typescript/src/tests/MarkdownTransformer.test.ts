import * as fs from 'fs'
import {MarkDownTransformer} from "../MarkdownTransformer";



describe('Markdown Transform', () => {
    const inputFile = "./input.md"
    const outputFile = "./output.md"
    beforeEach(() => {
        fs.writeFileSync(inputFile, "[visible text link](url)")
    })

    afterEach(() => {
        if(fs.existsSync(inputFile)) {
            fs.unlinkSync(inputFile)
        }
        if(fs.existsSync(outputFile)) {
            fs.unlinkSync(outputFile)
        }
    })

    it('transform a markdown file and replace anchors', () => {
        new MarkDownTransformer().transform(inputFile, outputFile)
        expect(fs.readFileSync(outputFile).toString())
            .toBe("visible text link [^anchor1]\n\n[^anchor1]: url")
    });

    it('throws an error when input file does not exists', () => {
        if (fs.existsSync(inputFile)) {
            fs.unlinkSync(inputFile)
        }
        expect(() => { new MarkDownTransformer().transform(inputFile, outputFile) })
            .toThrow("Input file does not exists")
    });

    it('throws an error when output file exists', () => {
        fs.writeFileSync(outputFile, "irrelevant content")
        expect(() => {
            new MarkDownTransformer().transform(inputFile, outputFile)
        }).toThrow("Output file already exists")
    })
})
