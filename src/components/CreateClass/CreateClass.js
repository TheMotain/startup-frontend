// @flow

import React, {Component} from "react";
import CreateClassForm from "./CreateClassForm";
import Dialog from "material-ui/Dialog";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class CreateClass extends Component {

    state = {
        open: false,
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    onSubmit(form: Object) {
        // TODO : handle request with reducer action then close dialog
        console.log(form);
        this.handleClose();
    }

    render() {
        return (
            <div>
                <FloatingActionButton onClick={this.handleOpen.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Créer une classe"
                    modal={true}
                    open={this.state.open}
                >
                    <CreateClassForm onSubmit={this.onSubmit.bind(this)}/>
                </Dialog>
            </div>
        );
    }
}

export default CreateClass;
