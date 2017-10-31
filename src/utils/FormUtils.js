// @flow
import * as StringUtils from "./StringUtils";

export function isAlpha(input: string) {
    if (typeof input !== 'string') return false;
    return /^[A-Za-z ]*$/.test(StringUtils.removeDiacritics(input));
}

export function isAlphaNum(input: any) {
    if (typeof input !== 'string' && typeof input !== 'number') return false;
    let clearedString = StringUtils.removeDiacritics(input + "");
    return /^[A-Za-z0-9 \-']*$/.test(clearedString);
}

export function isEmpty(input: any) {
    if (typeof input === "number") return false;
    if (typeof input === "object") {
        if (!input) return true;
        return Object.keys(input).length === 0;
    }
    return !input;
}

export function isNumeric(input: string) {
    if (typeof input !== 'string' && typeof input !== 'number') return false;
    return /^[0-9 ]*$/.test(input + "");
}