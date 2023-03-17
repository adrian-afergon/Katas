import {MarkdownPage} from "../MarkdownPage";

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