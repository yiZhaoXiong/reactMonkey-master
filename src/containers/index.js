import React, {Component, PropTypes} from 'react';
import {Center, Left, Right}  from '../components';
import {connect} from 'react-redux';
import {insert_component, check_component, edit_component} from '../reducers/action'
import {Row, Col} from 'antd'
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import Dt from '../dragComponents/Dt'
@connect(
    state => ({
        components: state.components,
        pageComponents: state.pageComponents,
        componentCheckedId: state.componentCheckedId
    }),
    {insert_component, check_component, edit_component}
)

class Index extends Component {
    insert_component = (c) => {
        this.props.insert_component(c);
    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Left components={this.props.components}/>
                    </Col>
                    <Col span={16}>
                        <Dt drop={this.insert_component}>
                            <Center check_component={this.props.check_component}
                                    pageComponents={this.props.pageComponents}
                                    style={{width: '768px', height: '500px'}}
                            />
                        </Dt>
                    </Col>
                    <Col span={4}>
                        <Right components={this.props.pageComponents} componentCheckedId={this.props.componentCheckedId}
                               edit_component={this.props.edit_component}/>
                    </Col>
                </Row>


            </div>
        )
    }
}
module.exports = DragDropContext(HTML5Backend)(Index);

