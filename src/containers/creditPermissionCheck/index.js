import React from 'react';
import Menu from '../../components/Menu'
import {connect} from 'react-redux';
import './topMenuList';
import load_menus from './action'
@connect(
    state => ({menus: state.topMenuList}),
    {load_menus}
)

class CreditPermissionCheck extends React.Component {

    handleLogout = () => {
        this.props.load_menus();
    };

    render() {
        const {menus,load_menus} = this.props;
        return (
            <div>
                {this.props.menus && this.props.menus.map(m=><Menu act={this.handleLogout} data={m}/>)}
            </div>
        )
    }
}
module.exports = CreditPermissionCheck;
