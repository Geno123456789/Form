import React, { Component } from 'react';
import style from './AboutMyself.module.css';

export class AboutMyself extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            aboutMyself: '',
            aboutMyselfDirty: false,
            aboutMyselfError: 'Поле пустое. Заполните пожалуйста',
            counter: 600
        };
    }
    blurHandler(e) {
        if (e.target.name) {
            this.setState({
                aboutMyselfDirty: true,
            })
        }
        this.props.updateAboutMyself(this.state);
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value,
        });
        if (e.target.value.trim().length === 0) {
            this.setState({
                aboutMyselfError: 'Поле пустое. Заполните пожалуйста',
            });
        } else if (e.target.value.trim().length > 600) {
            this.setState({
                aboutMyselfError: 'Превышен лимит символов в поле',
            });
        }
        else {
            this.setState({
                aboutMyselfError: '',
            });
        }
        this.setState({
            counter: 600 - e.target.value.trim().length,
        });

    }
    render() {
        return (
            <label>
                <p>О себе</p>
                <textarea
                    name='aboutMyself'
                    placeholder='О себе'
                    rows='7'
                    value={this.state.value}
                    onChange={(e) => this.handlerChange(e)}
                    onBlur={(e) => this.blurHandler(e)}
                    maxLength='601'
                ></textarea>
                {(this.state.counter >= 0) && <div className={style.counter}>{`Осталось ${this.state.counter}/600 символов`}</div>}
                {(this.state.aboutMyselfDirty && this.state.aboutMyselfError) && <div className={style.error}>{this.state.aboutMyselfError}</div>}
            </label>
        )
    }
}

export default AboutMyself  