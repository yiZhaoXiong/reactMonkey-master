import {UPDATE_LAYOUT} from './actionTypes'
import * as antd from 'antd'


const initialState = [];



const layout = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LAYOUT:
            return state=action.data;
        default:
            return state
    }
}

export default layout
