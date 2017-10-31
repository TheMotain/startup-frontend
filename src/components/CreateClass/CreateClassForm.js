// @flow
import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderTextField, required, minLength2} from "../../utils/ReduxFormUtils";
import RaisedButton from "material-ui/RaisedButton";


let CreateClassForm = props => {
    const {handleSubmit, invalid} = props;

    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="name"
                component={renderTextField}
                label="Nom de la classe"
                validate={[required, minLength2]}
            />
            <RaisedButton
                type="submit"
                label="Créer"
                disabled={invalid}
            />
        </form>
    )
};

export default reduxForm({
    form: 'createClass'
})(CreateClassForm);