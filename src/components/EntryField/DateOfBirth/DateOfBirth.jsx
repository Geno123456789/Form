import React, { Component } from 'react';
import style from './DateOfBirth.module.css';

export class DateOfBirth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dateOfBirth: '',
            dateDirty: false,
            dateError: 'Поле пустое. Заполните пожалуйста',
        };
    }
    blurHandler(e) {
        switch (e.target.name) {
            case 'dateOfBirth':
               this.setState({
                    dateDirty: true,
                })
                break;

            default:
                break;
        }
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value,
        });
        if (e.target.value.trim().length === 0) {
            this.setState({
                dateError: 'Поле пустое. Заполните пожалуйста',

            });
        }else {
            this.setState({
                dateError: '',
            });
        }
    }
  render() {
    return (
        <label>
        <p>Дата рождения</p>
        <input 
        type='date'
        name='dateOfBirth'
        placeholder='Дата рождения'
        value={this.state.value}
        onChange={(e) => this.handlerChange(e)}
        onBlur={(e) => this.blurHandler(e)}
         />
         {(this.state.dateDirty && this.state.dateError) && <div className={style.error}>{this.state.dateError}</div>}
    </label>
    )
  }
}

export default DateOfBirth