// @flow
import React from "react";
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {QCM} from "../../types/QCM";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import type {Classroom} from "../../types/Classroom";

/**
 * Propriétés :
 * qcmList : la liste des qcm à afficher
 * fetchQCMList : la fonction à appeler pour récupérer les qcms
 * fetchStatus : état de la requête de récupération des qcms.
 */
type Props = {
    qcmList: Array<QCM>,
    classes: Array<Classroom>,
    fetchQCMList: () => Promise<any>,
    fetchStatus: ReducerUtils.FetchStatus
}

type State = {}

/**
 * Affiche la liste des qcm.
 */
class ListQCM extends React.Component<Props, State> {

    /**
     * Réupère la liste des classes lors de la construction du composant.
     * @param props
     */
    constructor(props: Props) {
        super(props);
        this.props.fetchQCMList();
    }

    /**
     * Affiche la liste des QCM (renvoie un tableau de QCMs)
     * @returns {Array}
     */
    renderQCMList() {

        {console.log(this.props.qcmList)}
        return (this.props.qcmList.map((qcm: QCM) =>
                            <TableRow onRowClick="">
                                <TableRowColumn>{qcm.title}</TableRowColumn>
                                <TableRowColumn>
                                    {this.props.classes.map((classroom: Classroom) => {
                                        if (classroom.id === qcm.idClass)
                                            classroom.className
                                    })}
                                </TableRowColumn>
                            </TableRow>));
    }

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Titre du QCM</TableHeaderColumn>
                        <TableHeaderColumn>Classe</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.renderQCMList()}
                </TableBody>
            </Table>);
    }
}

export default ListQCM;
