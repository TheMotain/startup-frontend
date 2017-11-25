// @flow
import React from "react";
import type {Classroom} from "../../types/Classroom";

import {List} from "material-ui/List";

import ClassItem from "./ClassItem";
import * as ReducerUtils from "../../reducers/ReducerUtils";

type Props = {
    classes: Array<Classroom>,
    fetchClasses: () => Promise<any>,
    fetchStatus: ReducerUtils.FetchStatus
}

type State = {}

class ListClass extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.props.fetchClasses();
    }

    renderClasses() {
        return this.props.classes.map((classroom: Classroom) => <ClassItem key={classroom.id} classroom={classroom} />);
    }

    render() {
        return (
            <List>
                {this.renderClasses()}
            </List>
        )
    }
}

export default ListClass;
