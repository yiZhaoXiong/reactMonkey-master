/*export const todo = (state = {}, action) => {
 switch (action.type) {
 case 'ADD_TODO':
 return {
 id: action.id,
 text: action.text,
 completed: false
 }
 case 'TOGGLE_TODO':
 if (state.id !== action.id) {
 return state
 }

 return Object.assign({}, state, {
 completed: !state.completed
 })

 default:
 return state
 }
 }*/

import {combineAsyncReducers} from 'redux-async-actions-reducers';
import components from './components'
import pageComponents from './pageComponents'
import componentCheckedId from './componentCheckedId'
import layout from './layout'

let ex= combineAsyncReducers({
    components: components,
    pageComponents:pageComponents,
    componentCheckedId:componentCheckedId
});

export default ex;