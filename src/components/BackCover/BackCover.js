// @flow

import React, {Component} from "react";
import {CardMedia, CardTitle} from "material-ui";


type Props= {
    title: string,
    image: string
}

class BackCover extends Component {



    render() {
        const style = {
            width: "100%",
            marginTop: "-29px"
        };

        return (
            <CardMedia overlay={<CardTitle title={this.props.title}/>}>
                <img src={this.props.image} alt="" />
            </CardMedia>
        );
    }
}

export default BackCover;
