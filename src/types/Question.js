import type {Answer} from "./Answer"

export type Question = {
    choices: Array<Answer>,
    id?: number,
    nbPoints: number,
    query: string
}