// @flow

import React, {Component} from "react";
import {CardMedia, CardTitle} from "material-ui";


class Icon extends Component {



    render() {
        return (
            <img src={this.props.icon} style={this.props.style} alt="" />
        );
    }
}

export default Icon;
