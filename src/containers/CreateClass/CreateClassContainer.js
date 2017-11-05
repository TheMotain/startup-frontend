// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateClass from "../../components/CreateClass/CreateClass"
import * as ClassSelectors from "../../reducers/ClassReducer";
import * as ClassActions from "../../actions/ClassActions";
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {Classroom} from "../../types/Classroom";


type Props = {
    postStatus: ReducerUtils.PostStatus,
    postClass: (Classroom) => Promise<Classroom>
};

class CreateClassContainer extends Component {
    props: Props;

    render() {
        return (
            <CreateClass
                postStatus={this.props.postStatus}
                onPostClass={this.props.postClass}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postStatus: ClassSelectors.getPostStatus(state)
    };

};

const mapDispatchToProps =  {
    postClass: ClassActions.postClass
};

export default  connect(mapStateToProps, mapDispatchToProps)(CreateClassContainer)
