// @flow
import * as ReduxFormUtils from "../ReduxFormUtils";

describe("ReduxFormUtils.js", async () => {

    test('maxLength', () => {
        let maxLength3 = ReduxFormUtils.maxLength(3);
        expect(maxLength3).toBeInstanceOf(Function);
        expect(maxLength3("toto")).toBe("Ce champ doit faire au plus 3 caractères.")
        expect(maxLength3("123")).toBe(undefined);
    });


    test('minLength', () => {
        let minLength = ReduxFormUtils.minLength(3);
        expect(minLength).toBeInstanceOf(Function);
        expect(minLength("12")).toBe("Ce champ doit faire au moins 3 caractères.");
        expect(minLength("123")).toBe(undefined);
    });

    test('minLength2', () => {
        expect(ReduxFormUtils.minLength2("1")).toBe("Ce champ doit faire au moins 2 caractères.");
        expect(ReduxFormUtils.minLength2("")).toBe(undefined);
        expect(ReduxFormUtils.minLength2("123")).toBe(undefined);
    });

    test('alphaNum', () => {
        expect(ReduxFormUtils.alphaNum(3)).toBe(undefined);
        expect(ReduxFormUtils.alphaNum("a3")).toBe(undefined);
        expect(ReduxFormUtils.alphaNum("azeha")).toBe(undefined);
        expect(ReduxFormUtils.alphaNum("")).toBe(undefined);
        expect(ReduxFormUtils.alphaNum(undefined)).toBe(undefined);

        expect(ReduxFormUtils.alphaNum("@@")).toBe("Ce champ ne doit contenir que des caractères alphanumériques, espaces, - et _.");
    });

    test('alpha', () => {
        expect(ReduxFormUtils.alpha("azeha")).toBe(undefined);
        expect(ReduxFormUtils.alpha("")).toBe(undefined);
        expect(ReduxFormUtils.alpha(undefined)).toBe(undefined);

        expect(ReduxFormUtils.alpha("a3")).toBe("Ce champ doit être composé de lettres et espaces.");
        expect(ReduxFormUtils.alpha(3)).toBe("Ce champ doit être composé de lettres et espaces.");
        expect(ReduxFormUtils.alpha("@@")).toBe("Ce champ doit être composé de lettres et espaces.");
    });


    test('numeric', () => {
        expect(ReduxFormUtils.numeric(3)).toBe(undefined);
        expect(ReduxFormUtils.numeric(3e10)).toBe(undefined);
        expect(ReduxFormUtils.numeric("")).toBe(undefined);
        expect(ReduxFormUtils.numeric(undefined)).toBe(undefined);

        expect(ReduxFormUtils.numeric("azeha")).toBe("Ce champ doit être composé de chiffres.");
        expect(ReduxFormUtils.numeric("a3")).toBe("Ce champ doit être composé de chiffres.");
        expect(ReduxFormUtils.numeric("@@")).toBe("Ce champ doit être composé de chiffres.");
    });

    test('required', () => {
        expect(ReduxFormUtils.required(0)).toBe(undefined);
        expect(ReduxFormUtils.required("42")).toBe(undefined);
        expect(ReduxFormUtils.required({tata: 42})).toBe(undefined);
        expect(ReduxFormUtils.required([42])).toBe(undefined);

        expect(ReduxFormUtils.required(undefined)).toBe("Ce champ est obligatoire.");
        expect(ReduxFormUtils.required("")).toBe("Ce champ est obligatoire.");
        expect(ReduxFormUtils.required({})).toBe("Ce champ est obligatoire.");
        expect(ReduxFormUtils.required([])).toBe("Ce champ est obligatoire.");
    });


    test('matchRegex', () => {
        let match42 = ReduxFormUtils.matchRegex(/^42$/, "erreur");
        expect(match42).toBeInstanceOf(Function);

        expect(match42(42)).toBe(undefined);
        expect(match42("42")).toBe(undefined);
        expect(match42("anything else")).toBe("erreur");
    });
});