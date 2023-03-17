import {helloWorld} from "../index";

describe('Hello world', function () {
    it('says hello', function () {
        expect(helloWorld()).toBe('Hello world')
    });
});