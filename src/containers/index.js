import React, {Component, PropTypes} from 'react';
import {Top, Left, Right, Bottom}  from '../components';
import {connect} from 'react-redux';
import  load_menus from '../reducers/action'
@connect(
    state => ({menus: state.leftMenuList}),
    {load_menus}
)

class Index extends Component {
    handleLogout = () => {
        this.props.load_menus();
    };

    render() {
        const {menus} = this.props;
        return (
            <div>
                <Top/>
                <Left menus={menus} act={this.handleLogout}/>
                <Right>
                    {this.props.children}
                </Right>
                <Bottom/>
            </div>
        )
    }
}
module.exports = Index;

