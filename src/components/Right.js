import React from 'react';
import {Form, Input, Button, Checkbox, InputNumber} from 'antd';
const FormItem = Form.Item;


class Right extends React.Component {
    render() {
        const {getFieldProps} = this.props.form;
        const checkCompent = this.props.components.filter(c=>c.id == this.props.componentCheckedId);
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        let f = [];

        const handleChange = (event)=> {
            event.preventDefault();
            this.props.form.getFieldsValue();
            this.props.edit_component("col",event.target.value||event.target.checked,this.props.componentCheckedId);

        }

        function che(v,key) {
            switch (typeof v) {
                case "number":
                    return <InputNumber  value={v} k={key} onChange={handleChange} />;
                    break;
                case "boolean":
                    return <Checkbox checked={v} k={key} onChange={handleChange}/>;
                    break;
                default:
                    return <Input value={v} k={key} onChange={handleChange}/>;
            }

        }

        if (checkCompent && checkCompent.length) {
            for (var key of Object.keys(checkCompent[0].component)) {
                f.push(
                    <FormItem  {...formItemLayout} label={key}>
                        {che(checkCompent[0].component[key],key)}

                    </FormItem>)
            }
        }

        /*  handleSubmit = (e)=> {
         e.preventDefault();
         console.log('收到表单值：', this.props.form.getFieldsValue());
         }*/
        return (
            <Form horizontal onSubmit={handleChange}>
                {f}
            </Form>
        )
    }
}
export  default Right = Form.create()(Right);
