// @flow
import React, {Component} from 'react'
import CreateQuestionForm from "./CreateQCMForm";
import Dialog from "material-ui/Dialog";
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {QCM} from "../../types/QCM";
import AddButton from "../Common/AddButton";

type Props = {
    onPostQCM: (QCM),
    postStatus: ReducerUtils.PostStatus,
    classId: number
}

type State = {
    open: boolean,
    serverErrors: Array<string>
}

class CreateQCM extends Component<Props, State> {

    /**
     * Attributs du composant.
     * open : boolean vrai si la modal est ouverte, faux sinon.
     * serverErrors: tableau d'erreur à afficher sur le formulaire. (sera modifié ensuite par une notification)
     * @type {{open: boolean, serverErrors: Array}}
     */
    state = {
        open: false,
        serverErrors: []
    };

    /**
     * Ouvre la modal
     */
    handleOpen() {
        this.setState({open: true});
    };

    /**
     * Ferme la modale
     */
    handleClose() {
        this.setState({open: false});
    };


    /**
     * fonction appelé lors de l'envoi du formulaire.
     * @param form Le formulaire (valide)
     */
    onSubmit(form: Object) {
        let qcm: QCM = {
            idClass: this.props.classId,
            instruction: "Instructions",
            questions: [form],
            title: "Ceci est le titre du QCM"
        };

        console.log(qcm);

        /*this.props.onPostQCM(qcm).then(() => {
            this.handleClose();
        }, (errors) => {
            this.setState({
                serverErrors: errors
            });
        });*/
    }

    render() {
        return (
            <div>
                <AddButton onClick={this.handleOpen.bind(this)}/>
                <Dialog
                    title="Créer une classe"
                    modal={true}
                    open={this.state.open}
                    className="dialog-title"
                >
                    <CreateQuestionForm
                        onSubmit={this.onSubmit.bind(this)}
                        onCancel={this.handleClose.bind(this)}
                        isLoading={this.props.postStatus.posting}
                    />
                    {this.state.serverErrors.map(error => <p>{error}</p>)}
                </Dialog>
            </div>
        );
    }
}

export default CreateQCM;
