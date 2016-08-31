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
import menus from './leftMenuList'


let ex= combineAsyncReducers({
    leftMenuList: menus,
    topMenuList:null
});

export default ex;