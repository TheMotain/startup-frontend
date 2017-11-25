// @flow
import React from "react";
import {reduxForm} from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import {renderTextField, required, minLength2, alphaNum} from "../../utils/ReduxFormUtils";
import {AutoComplete} from "material-ui";
import type {Student} from "../../types/Student";
import {getStudents} from "../../actions/StudentActions";

/**
 * Formulaire d'ajout d'élève.
 * @param props
 * @returns {XML}
 * @constructor
 */



let AddStudentForm = props => {
    /**
     * handleSubmit => fonction de gestion du formulaire (correspond au onSubmit donné lors de l'instanciation)
     * invalid => boolean à faux si le formulaire est invalide. Vrai sinon.
     * onCancel => fonction donné lors de l'instanciation du composant. Appelé lors d'un clique sur le bouton annuler.
     */
    const {onNewRequest, onCancel, students, onUpdateInput} = props;

    const dataSource = students.map((stud) => ({
        name: `${stud.firstName}  ${stud.lastName}`,
        student: stud
    }));

    const dataSourceConfig = {
        text: 'name', value: 'student'
    }

    return (
        <div>
            <AutoComplete
                name="studentName"
                hintText={"Rechercher un élève"}
                dataSource={dataSource}
                dataSourceConfig={dataSourceConfig}
                onUpdateInput={onUpdateInput}
                onNewRequest={onNewRequest}
            />
            <div>
                <RaisedButton
                    label="Annuler"
                    onClick={onCancel}
                />
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'AddStudent'
})(AddStudentForm);