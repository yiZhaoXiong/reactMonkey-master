import React from 'react';
import Menu from './Menu'


export  default  class Nav extends React.Component {

    render() {
        return (
            <div>
                {this.props.menus && this.props.menus.map(m=><Menu data={m} act={this.props.act}/>)}
            </div>
        )
    }
}

