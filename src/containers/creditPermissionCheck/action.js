import actionTypes from './actionTypes';


export default function load_menus() {
    return {
        type: actionTypes.LOAD_MENUS,
        data: [{
            active: true,
            menuName: "平台管理",
            subMenu: [{
                url: "#",
                name: "外部平台管理",
                active: true
            }, {
                url: "#",
                name: "评分标准设置",
                active: false
            }]
        }, {
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
        }]
    };
};

