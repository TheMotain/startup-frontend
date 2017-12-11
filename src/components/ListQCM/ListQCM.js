// @flow
import React from "react";

import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {QCM} from "../../types/QCM";
import {
    Card, CardHeader, CardText, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui";
import QCMItem from "./QCMItem";

/**
 * Propriétés :
 * qcmList: la liste des QCMs
 * idClassroom : l'id de la classe
 * fetchQCMPerClass : la fonction à appeler pour récupérer les qcm pour une classe
 * fetchStatus : état de la requête de récupération des classes.
 */
type Props = {

    qcmList: Array<QCM>,
    idClassroom: number,
    fetchQCMPerClass: (number) => Promise<any>,
    fetchStatus: ReducerUtils.FetchStatus
}

type State = {}

/**
 * Affiche la liste des QCM d'une classe.
 */
class ListQCM extends React.Component<Props, State> {

    /**
     * Réupère la liste des classes lors de la construction du composant.
     * @param props
     */
    constructor(props: Props) {
        super(props);
        this.props.fetchQCMPerClass(this.props.idClassroom);
    }

    componentWillReceiveProps(newProps: Props){

        newProps.fetchQCMPerClass(newProps.idClassroom);
    }

    /**
     * Affiche la lsite des qcm (renvoie un tableau de ClassItem)
     * @returns {Array}
     */
    renderQcmList() {
        return this.props.qcmList.map((qcm: QCM) =>
            <TableRow>
                <TableRowColumn>
                    <Card>
                      <CardHeader
                        title={qcm.title}
                        actAsExpander={true}
                        showExpandableButton={true}
                      />
                    <CardText expandable={true}>

                        <QCMItem qcm={qcm}/>

                    </CardText>


                    </Card>


                </TableRowColumn>
            </TableRow>



        );
    }

    render() {
        return (
            <Table>
                <TableBody displayRowCheckbox={false}>
                    {this.renderQcmList()}
                </TableBody>
            </Table>
        )
    }
}

export default ListQCM;
