import {Anchor} from "../Anchor";

describe('Anchor', () => {
    it('build from markdown expression', () => {
        const anchor = Anchor.fromMarkdownExpression("[visible text link](url)")
        expect(anchor).toEqual(new Anchor("url", "visible text link"))
    });

    describe('is equal', function () {
        it('when url and text are the same', () => {
            expect(new Anchor('url', 'text').isEqual(new Anchor('url', 'text'))).toBeTruthy()
        });

        it('when url or text are different', () => {
            expect(new Anchor('url', 'text').isEqual(new Anchor('a', 'text'))).toBeFalsy()
            expect(new Anchor('url', 'text').isEqual(new Anchor('url', 'a'))).toBeFalsy()
        });
    });

});