import React, { Component } from 'react';
import style from './SiteField.module.css';

export class SiteField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            site: '',
            siteDirty: false,
            siteError: 'Поле пустое. Заполните пожалуйста',
        };
    }
    blurHandler(e) {
        switch (e.target.name) {
            case 'site':
                this.setState({
                    siteDirty: true,
                })
                break;

            default:
                break;
        }
    }

    siteHandler = (e) => {
        this.setState({
            value: e.target.value
        });
        const res = e.target.value.match(/^(ftp|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/);
        if (res == null) {
            this.setState({
                siteError: 'Некорректный адрес сайта',
            });
        } else {
            this.setState({
                siteError: '',
            });
        }
    }
    render() {
        return (
            <label>
                <p>Сайт</p>
                <input
                    name='site'
                    type='url'
                    placeholder='Введите сайт'
                    value={this.state.value}
                    onChange={(e) => this.siteHandler(e)}
                    onBlur={(e) => this.blurHandler(e)}
                />
                {(this.state.siteDirty && this.state.siteError) && <div className={style.error}>{this.state.siteError}</div>}
            </label>
        )
    }
}

export default SiteField