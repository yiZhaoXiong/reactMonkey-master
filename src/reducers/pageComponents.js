import {INSERT_COMPONENT, EDIT_COMPONENT} from './actionTypes'
const initialState = [];


const pageComponents = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_COMPONENT:
            return [
                ...state, action.data
            ]
        case EDIT_COMPONENT:

            return state.map(c=>pageComponent(c, action))
        default:
            return state
    }
}
const pageComponent = (state, action) => {
    switch (action.type) {
        case EDIT_COMPONENT:
            if (state.id != action.data.id) {
                return state
            }
            let c={};
            c[action.data.key]=action.data.value;
            let component = Object.assign({}, state.component, c);
            return Object.assign({}, state, {component:component})

    }
}
export default pageComponents