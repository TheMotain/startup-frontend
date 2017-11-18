// @flow
import React, {Component} from 'react'
import {Link} from 'react-router'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

type Props = {
};

type State = {
    openMenu: boolean
};

class Menu extends Component<Props, State> {

    state = {
        openMenu: false
    };

    handleToggle() {
        let isOpen: boolean = !this.state.openMenu;

        this.setState({openMenu: isOpen});
    }

    render() {
        const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

        if (this.state.openMenu) {
            contentStyle.marginLeft = 256;
        }

        return (
            <div>
                <AppBar
                    title="Gamification"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                />
                <Drawer open={this.state.openMenu} containerStyle={{
                    marginTop: 64,
                    height: (window.innerHeight - 64)
                }}>
                    <Link to="/classes"><MenuItem>Classe</MenuItem></Link>
                </Drawer>

                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Menu;
