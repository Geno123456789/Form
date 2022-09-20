import React, { Component } from 'react';
import style from './StackTechnology.module.css';

export class StackTechnology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            stack: '',
            stackDirty: false,
            stackError: 'Поле пустое. Заполните пожалуйста',
            counter: 600
        };
    }
    blurHandler(e) {
        if (e.target.name) {
            this.setState({
                stackDirty: true,
            })
        }
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value,
        });
        if (e.target.value.trim().length === 0) {
            this.setState({
                stackError: 'Поле пустое. Заполните пожалуйста',
            });
        } else if (e.target.value.trim().length > 600) {
            this.setState({
                stackError: 'Превышен лимит символов в поле',
            });
        }
        else {
            this.setState({
                stackError: '',
            });
        }
        this.setState({
            counter: 600 - e.target.value.trim().length,
        });

    }
    render() {
        return (
            <label>
                <p>Стек технологий</p>
                <textarea
                    name='stack'
                    placeholder='Стек технологий'
                    rows='7'
                    value={this.state.value}
                    onChange={(e) => this.handlerChange(e)}
                    onBlur={(e) => this.blurHandler(e)}
                    maxLength='601'
                ></textarea>
                {(this.state.counter >= 0) && <div className={style.counter}>{`Осталось ${this.state.counter}/600 символов`}</div>}
                {(this.state.stackDirty && this.state.stackError) && <div className={style.error}>{this.state.stackError}</div>}
            </label>
        )
    }
}

export default StackTechnology 