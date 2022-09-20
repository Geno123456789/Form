import React, { Component } from 'react';
import style from './ProjectDescription.module.css';

export class ProjectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            description: '',
            descriptionDirty: false,
            descriptionError: 'Поле пустое. Заполните пожалуйста',
            counter: 600
        };
    }
    blurHandler(e) {
        if (e.target.name) {
            this.setState({
                descriptionDirty: true,
            })
        }
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value,
        });
        if (e.target.value.trim().length === 0) {
            this.setState({
                descriptionError: 'Поле пустое. Заполните пожалуйста',
            });
        } else if (e.target.value.trim().length > 600) {
            this.setState({
                descriptionError: 'Превышен лимит символов в поле',
            });
        }
        else {
            this.setState({
                descriptionError: '',
            });
        }
        this.setState({
            counter: 600 - e.target.value.trim().length,
        });

    }
    render() {
        return (
            <label>
                <p>Описание последнего проекта</p>
                <textarea
                    name='description'
                    placeholder='Описание последнего проекта'
                    rows='7'
                    value={this.state.value}
                    onChange={(e) => this.handlerChange(e)}
                    onBlur={(e) => this.blurHandler(e)}
                    maxLength='601'
                ></textarea>
                {(this.state.counter >= 0) && <div className={style.counter}>{`Осталось ${this.state.counter}/600 символов`}</div>}
                {(this.state.descriptionDirty && this.state.descriptionError) && <div className={style.error}>{this.state.descriptionError}</div>}
            </label>
        )
    }
}

export default ProjectDescription  