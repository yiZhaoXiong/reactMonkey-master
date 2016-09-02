import {CHECK_COMPONENT,INSERT_COMPONENT} from './actionTypes'
const initialState=0;


const componentCheckedId = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_COMPONENT:
            return action.data.id
        case INSERT_COMPONENT:
            return action.data.id
        default:
            return state
    }
}

export default componentCheckedId
