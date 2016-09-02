import React from 'react';
import {DragSource} from 'react-dnd';
const spec = {
    beginDrag(props, monitor) {
        return {data: props.dsData}
    }
}
class Ds extends React.Component {
    render() {
        const {style, children, ...other}=this.props;
        return (
            this.props.connectDragSource(<div style={Object.assign({}, style)} {...other} >{children}</div>)

        )
    }
}
export default DragSource("drag", spec, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(Ds)

