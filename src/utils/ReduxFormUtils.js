/**
 * Created by louis on 31/10/17.
 */
// @flow
import React, {Component} from "react";
import * as FormUtils from "./FormUtils";
import TextField from "material-ui/TextField";

/************************/
/*    INPUT RENDERERS   */
/************************/

const errorField = ({touched, error}) => {
    return (
        touched && (error && <span className="error">{error}</span>)
    );
};


export const renderTextField = ({input, label, meta: {touched, error}, custom}: Object) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);


/*********************/
/* FIELD VERIFICATOR */
/*********************/

export const maxLength = (max: number) => (value: any) => {
    return value && value.length > max ? `Ce champ doit faire au plus ${max} caractères.` : undefined;
};

export const maxLength30 = maxLength(30);

export const minLength = (min: number) => (value: any) => {
    return value && value.length < min ? `Ce champ doit faire au moins ${min} caractères.` : undefined;
};

export const minLength3 = minLength(3);
export const minLength2 = minLength(2);
export const minLength1 = minLength(1);

export const alphaNum = (value: any) => {
    return value && !FormUtils.isAlphaNum(value) ? "Ce champ doit être composé de lettres, chiffres, - et '." : undefined;
};

export const numeric = (value: any) => {
    return value && !FormUtils.isNumeric(value) ? "Ce champ doit être composé de chiffres." : undefined;
};

export const alpha = (value: any) => {
    return value && !FormUtils.isAlpha(value) ? "Ce champ doit être composé de lettres et espaces." : undefined;
};

export const required = (value: any) => {
    return FormUtils.isEmpty(value) ? "Ce champ est obligatoire." : undefined;
};