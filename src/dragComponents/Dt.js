import React from 'react';
import {DropTarget} from 'react-dnd';

class Dt extends React.Component {
    render() {
        const {connectDropTarget, style, children, ...other} = this.props;
        return (
            connectDropTarget(
                <div style={Object.assign({ minHeight: "100px"}, style)} {...other} >
                    {children}
                </div>)
        )
    }
}
const spec = {
    drop(props, monitor) {
        props.drop(monitor.getItem().data)
    }
};
export default DropTarget("drag", spec, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
}))(Dt)


