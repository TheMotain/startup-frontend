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
    open: boolean;
}

class CreateClass extends Component {

    props: Props;
    state: State = {
        open: false
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    onSubmit(form: Object) {
        console.log(form);
        this.props.onPostClass(form).then(() => {
            this.handleClose();
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
                    <CreateClassForm onSubmit={this.onSubmit.bind(this)}/>
                </Dialog>
            </div>
        );
    }
}

export default CreateClass;
