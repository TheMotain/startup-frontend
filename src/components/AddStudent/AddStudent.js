// @flow

import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {Classroom} from "../../types/Classroom";
import type {Student} from "../../types/Student";
import AddStudentForm from "./AddStudentForm";
import * as StringUtils from "../../utils/StringUtils"


type Props = {
    postStatus: ReducerUtils.PostStatus,
    onAddStudent: (number, number) => Promise<Student>,
    students: Array<Student>,
    getStudents: (void) => Promise<any>,
    classroom : Classroom

};

type State = {
    open: boolean,
    serverErrors: Array<string>,
    searchValue: string
}

/**
 * Composant permettant de créer une classe.
 * Constitué d'un bouton + qui ouvre une modal contenant le formulaire.
 *
 * propriétés :
 *  postStatus: état de la requête d'ajout de classe.
 *  onPostClass: fonction callback à appeler pour ajouter une classe.
 */
class AddStudent extends Component<Props, State> {

    /**
     * Attributs du composant.
     * open : boolean vrai si la modal est ouverte, faux sinon.
     * serverErrors: tableau d'erreur à afficher sur le formulaire. (sera modifié ensuite par une notification)
     * searchValue: chaine de charactères contenant la valeur du champs de recherche
     * @type {{open: boolean, serverErrors: Array}}
     */
    state = {
        open: false,
        serverErrors: [],
        searchValue: ""
    };

    constructor(props: Props){
        super(props);
        this.props.getStudents();
    }

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
    handleNewRequest(chosenRequest: Student, index: number) {

        if(index != -1) {
            let student: Student = chosenRequest;

            let classroom: Classroom = this.props.classroom;

            if(!student.id || !classroom.id)
                return;
            this.props.onAddStudent(student.id, classroom.id).then(() => {
                this.handleClose();
            }, (errors) => {
                this.setState({
                    serverErrors: errors
                });
            });
        }else{
            //TODO afficher une erreur
        }

    };

    handleUpdateInput = (value: string) => {

        this.setState({
            searchValue: value
        });
    };


    getDataSource(){
        console.log(this.props.students, this.state.searchValue)
        return this.props.students.filter((student) => StringUtils.specialContains(student.firstName + " " + student.lastName, this.state.searchValue))
    }


    render() {

        return (
            <div>
                <FloatingActionButton onClick={this.handleOpen.bind(this)} secondary={true}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Ajouter un élève"
                    modal={true}
                    open={this.state.open}
                    className="dialog-title"
                >
                    <AddStudentForm onNewRequest={this.handleNewRequest.bind(this)}
                                    onCancel={this.handleClose.bind(this)}
                                    students={this.getDataSource()}
                                    onUpdateInput={this.handleUpdateInput.bind(this)}
                    />

                    {this.state.serverErrors.map(error => <p>{error}</p>)}
                </Dialog>
            </div>
        );
    }
}

export default AddStudent;
