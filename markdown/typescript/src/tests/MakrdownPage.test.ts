import {MarkdownPage} from "../MarkdownPage";
import {Anchor} from "../Anchor";

it.each([
    ['', ''],
    ['text', 'text'],
    ['[visible text link](url)', 'visible text link [^anchor1]\n\n[^anchor1]: url'],
    ['irrelevant [visible text link](url)', 'irrelevant visible text link [^anchor1]\n\n[^anchor1]: url'],
    ['[visible text link](url) irrelevant', 'visible text link [^anchor1] irrelevant\n\n[^anchor1]: url'],
    ['irrelevant [visible text link](url) irrelevant', 'irrelevant visible text link [^anchor1] irrelevant\n\n[^anchor1]: url'],
    ['[visible text link](url)[another visible text](url)', 'visible text link [^anchor1]another visible text [^anchor2]\n\n[^anchor1]: url\n\n[^anchor2]: url'],
    ['[visible text link](url), [another visible text](url)', 'visible text link [^anchor1], another visible text [^anchor2]\n\n[^anchor1]: url\n\n[^anchor2]: url'],
])('replace anchors by foot notes',
    (input, expected) => {
        const markdownWithFootNotes = new MarkdownPage(input).moveLinksToFootNotesWithAnchors()

        expect(markdownWithFootNotes).toBe(expected)
    }
)

/* This tests was used during the development process as scafold before making find method private */
describe('findAnchorsAtPage', () => {
    it('should create a dictionary with an anchor at text', () => {
            const inputContent = '[visible text link](url)';
            const anchors = new MarkdownPage(inputContent).findAnchorsAtPage(inputContent);
            const expected = [new Anchor('url', 'visible text link')];
            expect(anchors).toEqual(expected)
        })

    it('should create a dictionary with multiple anchors at text', () => {
        const inputContent = '[visible text link](url)[other visible text link](other url)';
        const anchors = new MarkdownPage(inputContent).findAnchorsAtPage(inputContent);
        const expected = [
            new Anchor('url', 'visible text link'),
            new Anchor('other url', 'other visible text link')
        ];
        expect(anchors).toEqual(expected)
    })

    it('should create a dictionary with multiple anchors at text with text on the middle', () => {
        const inputContent = '[visible text link](url), [other visible text link](other url)';
        const anchors = new MarkdownPage(inputContent).findAnchorsAtPage(inputContent);
        const expected = [
            new Anchor('url', 'visible text link'),
            new Anchor('other url', 'other visible text link')
        ];
        expect(anchors).toEqual(expected)
    })

    it('returns anchors without duplications given a text with same anchor', () => {
        const inputContent = '[visible text link](url), [visible text link](url)';
        const dictionary = new MarkdownPage(inputContent).findAnchorsAtPage(inputContent);
        const expected = [
            new Anchor('url', 'visible text link'),
        ];
        expect(dictionary).toEqual(expected)
    })

    it('returns anchors given a text with more characters after the last anchor', function () {
        const inputContent = '[visible text link](url), [other visible text link](other url) some text';
        const dictionary = new MarkdownPage(inputContent).findAnchorsAtPage(inputContent);
        const expected = [
            new Anchor('url', 'visible text link'),
            new Anchor('other url', 'other visible text link')
        ];
        expect(dictionary).toEqual(expected)
    });
});


describe('add footnotes', () => {
    it('should do nothing given no inputs', () => {
        const inputContent = ""
        const anchorsDictionary = {}

        expect(new MarkdownPage(inputContent).addFootNotes(inputContent, anchorsDictionary)).toEqual("")
    });

    it('should do nothing given a text without anchors', () => {
        const inputContent = "irr"
        const anchorsDictionary = {}

        expect(new MarkdownPage(inputContent).addFootNotes(inputContent, anchorsDictionary)).toEqual(inputContent)
    })
    it('should add to footnotes anchor text from anchor dictionary', () => {
        expect(new MarkdownPage("[^anchor1]").addFootNotes(
            "irr text [^anchor1]",
            {"[^anchor1]": new Anchor("irr url", "irr text")})
        ).toEqual("irr text [^anchor1]\n\n[^anchor1]: irr url")
    })
})