// @flow
import * as FormUtils from "../FormUtils";


describe("FormUtils.js", async () => {

    // ALPHA
    test('isAlpha alpha', () => {
        expect(FormUtils.isAlpha("alpha")).toBe(true);
    });

    test('isAlpha alpha accent', () => {
        expect(FormUtils.isAlpha("èéà")).toBe(true);
    });

    test('isAlpha alpha space', () => {
        expect(FormUtils.isAlpha("alpha characters")).toBe(true);
    });

    test('isAlpha alphanum', () => {
        expect(FormUtils.isAlpha("alpha with 42")).toBe(false);
    });

    test('isAlpha empty', () => {
        expect(FormUtils.isAlpha("")).toBe(true);
    });

    test('isAlpha special', () => {
        expect(FormUtils.isAlpha("alpha @")).toBe(false);
    });

    // ALPHANUM
    test('isAlphaNum alpha', () => {
        expect(FormUtils.isAlphaNum("alpha")).toBe(true);
    });

    test('isAlphaNum alpha accent', () => {
        expect(FormUtils.isAlphaNum("àéèç")).toBe(true);
    });

    test('isAlphaNum alpha space, - _ and ', () => {
        expect(FormUtils.isAlphaNum("alpha characters with _ ' et -")).toBe(true);
    });

    test('isAlphaNum alphanum', () => {
        expect(FormUtils.isAlphaNum("alpha with 42")).toBe(true);
    });

    test('isAlphaNum number', () => {
        expect(FormUtils.isAlphaNum(42)).toBe(true);
    });

    test('isAlphaNum empty', () => {
        expect(FormUtils.isAlphaNum("")).toBe(true);
    });

    test('isAlphaNum illegal special', () => {
        expect(FormUtils.isAlphaNum("alpha @")).toBe(false);
    });


    // NUMERIC
    test('isNumeric any string with any char', () => {
        expect(FormUtils.isNumeric("alpha")).toBe(false);
        expect(FormUtils.isNumeric("42@")).toBe(false);
    });

    test('isNumeric string with only number', () => {
        expect(FormUtils.isNumeric("42")).toBe(true);
    });

    test('isNumeric empty', () => {
        expect(FormUtils.isNumeric("")).toBe(true);
    });

    test('isNumeric number', () => {
        expect(FormUtils.isNumeric(42)).toBe(true);
    });

    test('isNumeric number exposant', () => {
        expect(FormUtils.isNumeric(42e10)).toBe(true);
    });


    // IS EMPTY
    test('isEmpty number cannot be empty', () => {
        expect(FormUtils.isEmpty(0)).toBe(false);
        expect(FormUtils.isEmpty(42)).toBe(false);
    });

    test('isEmpty string', () => {
        expect(FormUtils.isEmpty("")).toBe(true);
        expect(FormUtils.isEmpty("1")).toBe(false);
    });

    test('isEmpty Object', () => {
        expect(FormUtils.isEmpty({})).toBe(true);
        expect(FormUtils.isEmpty({tata: ""})).toBe(false);
    });

    test('isEmpty Array', () => {
        expect(FormUtils.isEmpty([])).toBe(true);
        expect(FormUtils.isEmpty([1])).toBe(false);
    });
});