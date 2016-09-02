import React from 'react';
import Dt from '../dragComponents/Dt'


export default class Center extends React.Component {
    render() {

        const {
            style,
            children,
            ...other,
        } = this.props;

        return (
            <div {...other} style={Object.assign({}, {width:"100px",height:"100px"}, style)}>
                {children}
            </div>
        )
    }
}
