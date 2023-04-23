import {Anchors} from "../Anchors";
import {Anchor} from "../Anchor";

describe('Anchors', () => {
    it('creates Anchors from list', () => {
        expect(Anchors.fromList([]).value).toEqual({});
        expect(Anchors.fromList([
            new Anchor('url', 'text')
        ]).value)
            .toEqual({
                '[^anchor1]': new Anchor('url', 'text')
            });
        expect(Anchors.fromList([
            new Anchor('url', 'text'),
            new Anchor('url', 'text'),
        ]).value)
            .toEqual({
                '[^anchor1]': new Anchor('url', 'text'),
                '[^anchor2]': new Anchor('url', 'text')
            });
    });
});