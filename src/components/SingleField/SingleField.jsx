import React from 'react';
import style from './SingleField.module.css';

export default class SingleField extends React.Component {


    phoneFormat(e) {
        this.props.updateData(e.target.value, this.props.nameField);
        let content = e.target.value;
        if (content) {
            content = Array.from(content).filter(ltr => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58);
            let [num1, num4, number21, number22] = [
                content[0],
                content.slice(1, 5).join(''),
                content.slice(5, 7).join(''),
                content.slice(7, 9).join(''),
            ]
            this.props.updateData(e.target.value = num1.length ? `${num1}` : '', this.props.nameField);
            if (num4.length) {
                this.props.updateData(e.target.value += `-${num4}`, this.props.nameField);
            }
            if (number21.length) {
                this.props.updateData(e.target.value += `-${number21}`, this.props.nameField);
            }
            if (number22.length) {
                this.props.updateData(e.target.value += `-${number22}`, this.props.nameField);
            }
        }
    }

    handlerChange(e) {
        this.props.updateData(e.target.value, this.props.nameField);
    }
    
    render() {
        return (
            <div className={style.single}>
                <label>
                    <p>{this.props.nameField === 'phone' ? this.props.nameFieldPhone : this.props.placeholder}</p>
                    <input
                        type={this.props.type}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        onChange={(e) => this.props.nameField === 'phone' ? this.phoneFormat(e) : this.handlerChange(e)}
                    />
                </label>
            </div>
        );
    }
}