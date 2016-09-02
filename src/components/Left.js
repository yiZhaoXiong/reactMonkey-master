import React from 'react';
import {Menu} from 'antd';
import Ds from '../dragComponents/Ds'


export default class Left extends React.Component {
    render() {
        return (
            <Menu  mode="inline">
                {this.props.components.map((c, ind)=>
                    <Menu.Item key={ind}>
                        <Ds dsData={c}><div name={c.name} >{c.name}</div></Ds>
                    </Menu.Item>
                )}
            </Menu>
        )
    }
}



