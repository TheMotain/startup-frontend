// @flow
import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderTextField, required, minLength2, alphaNum} from "../../utils/ReduxFormUtils";
import RaisedButton from "material-ui/RaisedButton";

let CreateClassForm = props => {
    const {handleSubmit, invalid, onCancel} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="className"
                component={renderTextField}
                label="Nom de la classe"
                validate={[required, minLength2, alphaNum]}
            />
            <div>
                <RaisedButton
                    type="submit"
                    label="Créer"
                    primary={true}
                    disabled={invalid}
                />
                <RaisedButton
                    label="Annuler"
                    primary={false}
                    onClick={onCancel}
                />
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'createClass'
})(CreateClassForm);