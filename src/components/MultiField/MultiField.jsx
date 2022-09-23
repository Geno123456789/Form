import React from 'react';
import style from './MultiField.module.css';

export default class MultiField extends React.Component {


    handlerChange(e) {
        this.props.updateData(e.target.value, this.props.nameField);
    }
    render() {
        return (
            <div className={style.multi}>
                <label>
                    <p>{this.props.placeholder}</p>
                    <textarea
                        rows='7'
                        maxLength={601}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={(e) => this.handlerChange(e)}
                    ></textarea>
                </label>
            </div>
        );
    }
}

