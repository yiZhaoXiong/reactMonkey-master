/**
 * Created by Administrator on 2016/8/30.
 */
import {LOAD_COMPONENTS, INSERT_COMPONENT, CHECK_COMPONENT,EDIT_COMPONENT} from './actionTypes';
import * as antd from 'antd'
/*export function load_components() {
 return {
 type: LOAD_COMPONENTS,
 data: [{
 name: "Checkbox",
 component:antd.Checkbox
 },
 {
 name: "Button",
 component:antd.Button
 }]
 };
 };*/
let pageComponentId = 0
export function insert_component(comp) {
    return {
        type: INSERT_COMPONENT,
        data: {
            component: comp,
            id: pageComponentId++
        }
    };
};


export function check_component(id) {
    return {
        type: CHECK_COMPONENT,
        data: {
            id: id
        }
    };
};
export function edit_component(key,value,id) {

    return {
        type: EDIT_COMPONENT,
        data: {
            key:key,
            value:value,
            id: id
        }
    };
};

