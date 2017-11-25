// @flow

/**
 * type student
 * id (optionnel): identifiant de la classe.
 * studentName: nom de l'élève
 */
export type Student = {
    id?: number,
    firstName: string,
    lastName: string,
    idClass?: number
};