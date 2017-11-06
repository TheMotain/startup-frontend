// @flow

import React, {Component} from "react";
import CreateClassForm from "./CreateClassForm";
import Dialog from "material-ui/Dialog";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {Classroom} from "../../types/Classroom";

type Props = {
    postStatus: ReducerUtils.PostStatus,
    onPostClass: (Classroom) => Promise<Classroom>
};

type State = {
    open: boolean,
    serverErrors: Array<string>
}

class CreateClass extends Component<Props, State> {

    state = {
        open: false,
        serverErrors: []
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    onSubmit(form: Object) {
        let classroom: Classroom = {
            className: form.name
        };

        this.props.onPostClass(classroom).then(() => {
            this.handleClose();
        }, (errors) => {
            this.setState({
                serverErrors: errors
            })
        });
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
                    <CreateClassForm onSubmit={this.onSubmit.bind(this)} onCancel={this.handleClose.bind(this)}/>
                    {this.state.serverErrors.map(error => <p>{error}</p>)}
                </Dialog>
            </div>
        );
    }
}

export default CreateClass;
