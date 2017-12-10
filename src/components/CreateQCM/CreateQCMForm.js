// @flow
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import {renderTextField, required, renderCheckbox, alphaNum, numeric} from "../../utils/ReduxFormUtils";
import Plus from "material-ui/svg-icons/content/add"

import ValidateButton from "../ValidateButton/ValidateButton";
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

import {
    Card, CardActions, CardHeader, CardText, FlatButton, List, ListItem, Table, TableBody, TableFooter, TableRow,
    TableRowColumn
} from "material-ui";


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


    const renderAnswers = ({fields, question}) => {

        // At leas 1 input
        if (fields.length === 0) {
            fields.push({good: false});
        }


        return (
            <div>
                <Table
                    bodyStyle={{"max-height":'200px'}}
                    selectable={false}
                    style={{
                        width: '150%',
                        maxWidth: 'none',}}>
                    <TableBody
                        displayRowCheckbox={false}>

                        <Subheader> Réponses: </Subheader>

                    {
                        fields.map((choices, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>
                            <Field
                                name={`${question}.${choices}.choice`}
                                type="text"
                                validate={[required]}
                                component={renderTextField}
                                label={`Réponse #${index + 1}`}/>

                            <Field
                                label={"Réponse correcte"}
                                name={`${question}.${choices}.good`}
                                component={renderCheckbox}/>
                            </TableRowColumn>
                            <TableRowColumn>
                                <IconButton onClick={() => fields.remove(index)}>
                                    <Delete
                                       color={'#afafaf'}
                                  />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>

                    ))

                    }

                    </TableBody>
                </Table>
                <FlatButton
                    label="Ajouter une réponse supplémentaire"
                    labelPosition="after"
                    icon={<Plus/> }
                    onClick={() => fields.push({good: false})}
                    style={{color:'#afafaf'}}
                    labelStyle={{"text-transform" : "none",
                        "font-weight": "normal"}}

                />
            </div>

        );
    };

    const renderQuestions = ({fields}) => {
        return (
            <div>

                <Subheader> Questions: </Subheader>

                {
                    fields.map((questions, index) => (
                        <Card key={index}>
                            <CardText>
                                <Field
                                    name={`${questions}.query`}
                                    type="text"
                                    validate={[required]}
                                    component={renderTextField}
                                    label={`Question #${index + 1}`}
                                />

                                <Field
                                    name={`${questions}.nbPoints`}
                                    type="text"
                                    validate={[required, numeric]}
                                    component={renderTextField}
                                    label={`Nombre de points`}
                                />
                                <FieldArray name={`${questions}.choices`} component={renderAnswers} question={questions}/>
                            </CardText>

                            <CardActions>

                                <IconButton onClick={() => fields.remove(index)}>
                                    <Delete
                                        color={'#afafaf'}
                                    />
                                </IconButton>

                            </CardActions>
                        </Card>


                    ))
                }
                <FlatButton
                    label="Ajouter une question"
                    labelPosition="after"
                    icon={<Plus/> }
                    onClick={() => fields.push({good: false})}
                    style={{color:'#afafaf'}}
                    labelStyle={{"text-transform" : "none",
                        "font-weight": "normal"}}
                />

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
            /><br/>

            <Field
                name="instructions"
                component={renderTextField}
                label="Instructions du QCM"
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