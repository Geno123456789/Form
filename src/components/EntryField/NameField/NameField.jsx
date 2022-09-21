import React, { Component } from 'react';
import style from './NameField.module.css';

export class NameField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            firstName: '',
            nameDirty: false,
            nameError: 'Поле пустое. Заполните пожалуйста',
        };
    }
    blurHandler(e) {
        if (e.target.name) {
            this.setState({
                nameDirty: true,
            })
        }
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value,
        });
        if (e.target.value.trim().length === 0) {
            this.setState({
                nameError: 'Поле пустое. Заполните пожалуйста',

            });
        } else if (e.target.value[0] !== e.target.value[0].toUpperCase()) {
            this.setState({
                nameError: 'Имя должно начинаться с большой буквы',

            });
        }
        else {
            this.setState({
                nameError: '',
            });
        }
    }
    render() {
        return (
            <label>
                <p>Имя</p>
                <input
                    name='firstName'
                    type='text'
                    placeholder='Введите имя'
                    value={this.state.value}
                    onChange={(e) => this.handlerChange(e)}
                    onBlur={(e) => this.blurHandler(e)}
                />
                {(this.state.nameDirty && this.state.nameError) && <div className={style.error}>{this.state.nameError}</div>}
            </label>
        )
    }
}

export default NameField