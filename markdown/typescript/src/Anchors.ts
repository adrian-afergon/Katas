import {Anchor} from "./Anchor";

export class Anchors {

    private constructor (public readonly value: Record<string, Anchor>) {}

    static fromList (list: Array<Anchor>): Anchors {
        const createDictionaryFromAnchors = (total: Record<string, Anchor>, current: Anchor, index: number) => {
            return {...total, [`[^anchor${index + 1}]`]: current}
        };
        const anchorsDictionary = list.reduce(createDictionaryFromAnchors, {})
        return new Anchors(anchorsDictionary);
    }
}