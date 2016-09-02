import React from 'react';
import {Row,Col} from 'antd'
import Dt from '../dragComponents/Dt'

export default class Center extends React.Component {
    render() {
        const clickHandler = (event)=> {
            event.preventDefault();
            this.props.check_component(event.target.id);
        }

        return (
            <div {...this.props}>
                {this.props.pageComponents.map(c=>
                    <Row><Dt><Col span={c.component.col}><c.component.component id={c.id} {...c.component} onContextMenu={clickHandler}/></Col></Dt></Row>
                )}
            </div>
        )
    }
}
