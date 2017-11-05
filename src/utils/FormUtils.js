// @flow
import * as StringUtils from "./StringUtils";

export function isAlpha(input: string) {
    if (typeof input !== 'string') return false;
    return /^[A-Za-z ]*$/.test(StringUtils.removeDiacritics(input));
}

export function isAlphaNum(input: any) {
    return matchRegex(/^[A-Za-z0-9 \-']*$/, input);
}

export function matchRegex(regex: any, input: any) {
    if (typeof input !== 'string' && typeof input !== 'number') return false;
    let clearedString = StringUtils.removeDiacritics(input + "");
    return regex.test(clearedString);
}

export function isEmpty(input: any) {
    if (typeof input === "number") return false;
    if (typeof input === "object") {
        if (!input) return true;
        return Object.keys(input).length === 0;
    }
    return !input;
}

export function isNumeric(input: any) {
    return matchRegex(/^[0-9 ]*$/, input)
}