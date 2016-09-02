import {LOAD_COMPONENTS} from './actionTypes'
import * as antd from 'antd'


const initialState = [{
    component: antd.Checkbox,
    name: "CheckBox",
    col:"6"
}, {

    component: antd.Button,
    name: "Button",
    col:"6"
}];


const components = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMPONENTS:
            return action.data;
        default:
            return state
    }
}

export default components

