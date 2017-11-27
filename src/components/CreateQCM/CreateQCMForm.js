// @flow
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import {renderTextField, required, renderCheckbox, alphaNum} from "../../utils/ReduxFormUtils";
import {List, ListItem} from 'material-ui/List';

import ValidateButton from "../ValidateButton/ValidateButton";
import Subheader from 'material-ui/Subheader';
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
        return (
            <List>
                <ListItem type="button" onClick={() => fields.push({good: false})}>
                    Ajouter une réponse +
                </ListItem>
                <Subheader>Réponses :</Subheader>

                {fields.map((choices, index) => (
                    <ListItem
                        disabled={true}
                        key={index}
                        rightIconButton={
                            <IconButton onClick={() => fields.remove(index)}>
                                <BlockIcon />
                            </IconButton>
                        }
                    >
                        <Field
                            name={`${choices}.choice`}
                            type="text"
                            validate={[required]}
                            component={renderTextField}
                            label={`Réponse #${index + 1}`}
                        />

                        <Field
                            name={`${choices}.good`}
                            component={renderCheckbox}
                        />
                    </ListItem>
                ))}
            </List>
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