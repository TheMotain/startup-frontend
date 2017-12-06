// @flow
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import {renderCustomCheckbox, renderTextField, required} from "../../utils/ReduxFormUtils";
import ValidateButton from "../ValidateButton/ValidateButton";
import IconButton from 'material-ui/IconButton';
import BlockIcon from 'material-ui/svg-icons/content/block';


/**
 * Formulaire de création de classe.
 * @param props
 * @returns {XML}
 * @constructor
 */
let CreateQCMForm = props => {
    /**
     * handleSubmit => fonction de gestion du formulaire (correspond au onSubmit donné lors de l'instanciation)
     * invalid => boolean à faux si le formulaire est invalide. Vrai sinon.
     * onCancel => fonction donné lors de l'instanciation du composant. Appelé lors d'un clique sur le bouton annuler.
     */
    const {handleSubmit, valid, onCancel, isLoading} = props;


    const renderAnswers = ({fields}) => {

        // At leas 1 input
        if (fields.length === 0) {
            fields.push({good: false});
        }

        return (
            <div style={{
                overflow: "auto",
                maxHeight: "300px"
            }}>

                <RaisedButton onClick={() => fields.push({good: false})}>
                    Ajouter une réponse
                </RaisedButton>
                <h2>Réponses :</h2>

                {fields.map((choices, index) => (
                    <div key={index} style={{
                        width: "100%"
                    }}>
                        <Field
                            name={`${choices}.choice`}
                            type="text"
                            validate={[required]}
                            component={renderTextField}
                            label={`Réponse #${index + 1}`}
                        />
                        <Field
                            name={`${choices}.good`}
                            component={renderCustomCheckbox}
                        />
                        <IconButton onClick={() => fields.remove(index)}>
                            <BlockIcon/>
                        </IconButton>

                    </div>
                ))}
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit} className="create-class-form">
            <Field
                name="query"
                component={renderTextField}
                label="Intitulé de la question"
                validate={[required]}
            />


            <FieldArray name="choices" component={renderAnswers}/>

            <div>
                <ValidateButton
                    isValid={valid}
                    isLoading={isLoading}
                    label={"Créer"}
                />

                <RaisedButton
                    label="Annuler"
                    onClick={onCancel}
                    className="cancel-button"
                />

            </div>
        </form>
    );
};

export default reduxForm({
    form: 'createQuestion'
})(CreateQCMForm);