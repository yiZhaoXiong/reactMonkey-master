import React from 'react';
import Nav from './Nav'

export  default  class Left extends React.Component {

    render() {
        return (
            <div className="body-left" id="nav">
               <Nav menus={this.props.menus} act={this.props.act}/>
            </div>
        )
    }
}



