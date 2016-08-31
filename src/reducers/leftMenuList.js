import { fromJS,Map } from 'immutable';
import actionTypes from './actionTypes'
const initialState = [{
    active: true,
    menuName: "会员管理",
    subMenu: [{
        url: "/member",
        name: "会员信息查询",
        active: true
    }, {
        url: "/rank",
        name: "融资会员评级",
        active: false
    }]
}, {
    active: false,
    menuName: "平台管理",
    subMenu: [{
        url: "#",
        name: "外部平台管理",
        active: false
    }, {
        url: "#",
        name: "评分标准设置",
        active: false
    }]
},{
    active: false,
    menuName: "平台管理2",
    subMenu: [{
        url: "#",
        name: "外部平台管理",
        active: false
    }, {
        url: "#",
        name: "评分标准设置",
        active: false
    }]
}];


const subMenu = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_SUBMENU':
            if (state.name !== action.name) {
                return state
            }
            return {...state, active: action.active}
        default:
            return state
    }
}

const menu = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_MENU':
            if (state.name !== action.name) {
                return state
            }
            return {...state, active: action.active}
        case 'SELECT_SUBMENU':
            if (state.name !== action.parentName) {
                return state
            }
            return state.map(t =>
                subMenu(t, action)
            )

        default:
            return state
    }
}

const menus = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case actionTypes.LOAD_MENUS:
            return fromJS(action.data);
        case 'SELECT_MENU':
            return state.map(t =>
                menu(t, action)
            )
        case 'SELECT_SUBMENU':
            return state.map(t =>
                menu(t, action)
            )
        default:
            return state
    }
}

export default menus