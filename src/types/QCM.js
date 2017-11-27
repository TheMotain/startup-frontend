import type {Question} from "./Question";

export type QCM = {
    id?: number,
    idClass: number,
    instruction: string,
    questions: Array<Question>,
    title: string
}