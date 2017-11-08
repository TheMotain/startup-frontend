// @flow
import * as StringUtils from "../StringUtils";

describe("StringUtils.js", async () => {

    test('removeDiacritics', () => {
        expect(StringUtils.removeDiacritics("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïñòóôõöùúûüý"))
            .toEqual("AAAAAAAECEEEEIIIIDNOOOOOOUUUUYaaaaaaaeceeeeiiiinooooouuuuy");
    });

    test('specialContains', () => {
        expect(StringUtils.specialContains("phase avec accent élémentère (faute exprès)", "tère")).toEqual(true);
        expect(StringUtils.specialContains("phase avec accent élémentère (faute exprès)", "tata")).toEqual(false);
    });

    test('brToNl', () => {
        expect(StringUtils.brToNl("test<br>tata")).toBe("test\ntata");
        expect(StringUtils.brToNl("test<br/>tata")).toBe("test\ntata");
        expect(StringUtils.brToNl("test<br />tata")).toBe("test\ntata");
        expect(StringUtils.brToNl("test<br />tata<br>")).toBe("test\ntata\n");
        expect(StringUtils.brToNl("testbrtata")).toBe("testbrtata");
    });

    test('nlToBr', () => {
        expect(StringUtils.nlToBr("test\ntata")).toBe("test<br />tata");
        expect(StringUtils.nlToBr("\ntest\ntata\n")).toBe("<br />test<br />tata<br />");
    });
});