import type {Question} from "./Question";
import type {Classroom} from "./Classroom";

export type QCM = {
    id?: number,
    idClass: number,
    instruction: string,
    questions: Array<Question>,
    title: string
}