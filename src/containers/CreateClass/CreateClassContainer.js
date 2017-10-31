// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateClass from "../../components/CreateClass/CreateClass"

class CreateClassContainer extends Component {
    render() {
        return (
            <CreateClass />
        );
    }
}

const mapStateToProps = (state) => {
    return {};

};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default  connect(mapStateToProps, mapDispatchToProps)(CreateClassContainer)
