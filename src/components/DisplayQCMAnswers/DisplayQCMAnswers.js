// @flow
import React from 'react'
import type {QCM} from "../../types/QCM";
import type {Student} from "../../types/Student";
import type {StudentAnswers} from "../../types/StudentAnswer";
import type {Question} from "../../types/Question";
import type {Answer} from "../../types/Answer";

type Props = {
    qcmId: number,
    qcm: QCM,
    students: Array<Student>,
    answerMap: { [number]: StudentAnswers },
    fetchStudents: () => Promise<any>,
    fetchQCMs: () => Promise<any>,
    fetchAnswers: (number) => Promise<any>
}

type State = {}

class DisplayQCMAnswers extends React.Component<Props, State> {

    state = {};

    constructor(props) {
        super(props);
        this.props.fetchStudents();
        this.props.fetchQCMs();
        this.props.fetchAnswers(this.props.qcmId)
    }


    getColor(student: Student, studentAnswersMap: { [number]: StudentAnswers }, answers: Array<Answer>) {
        let hasGood = false;
        let isFalse = false;
        answers.forEach((answer: Answer) => {
            if (studentAnswersMap[answer.id] && studentAnswersMap[answer.id].studentIds.some(id => id === student.id)) {
                if (answer.good) {
                    hasGood = true;
                } else {
                    isFalse = true;
                }
            }
        });

        if(isFalse) return "red";
        if (hasGood) return "green";
        return "white"
    }

    renderStudentAnswer(student: Student, studentAnswersMap: { [number]: StudentAnswers }, answers: Array<Answer>) {
        let color = this.getColor(student, studentAnswersMap, answers);

        return (
            <td style={{
                width: 20,
                height: 20,
                backgroundColor: color
            }}></td>
        )
    }

    renderQuestion(students: Array<Student>, question: Question) {
        console.log(question);
        return (
            <tr>
                <td>{question.query}</td>
                {students.map(student => this.renderStudentAnswer(student, this.props.answerMap, question.answers))}
            </tr>
        )
    }

    renderQcm(qcm: ?QCM) {
        if(qcm) {
            return qcm.questions.map((question: Question) => {
                return this.renderQuestion(this.props.students, question);
            });
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Question</th>
                        {this.props.students.map((student: Student) => {
                            return <th>{student.firstName} {student.lastName}</th>
                        })}
                    </tr>
                    {this.renderQcm(this.props.qcm)}
                </table>
            </div>
        );
    }
}

export default DisplayQCMAnswers;
