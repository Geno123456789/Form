import React, { Component } from 'react';
import style from './Phone.module.css';

export class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phone: '',
            phoneDirty: false,
            phoneError: 'Поле пустое. Заполните пожалуйста',
        };
    }
    blurHandler(e) {
        switch (e.target.name) {
            case 'phone':
                this.setState({
                    phoneDirty: true,
                })
                break;

            default:
                break;
        }
    }

    
    phoneFormat(e) {
        let content = e.target.value;
        
        if (!content) {
            this.setState({
                phoneError: 'Поле пустое. Заполните пожалуйста',
                value: ''
            });
        }
        else {
          content = Array.from(content).filter(ltr => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58);
        
          let [num1, num4, number21, number22] = [
            content[0],
            content.slice(1, 5).join(''),
            content.slice(5, 7).join(''),
            content.slice(7, 9).join(''),
          ]
    
          this.setState({
            value: e.target.value = num1.length ? `${num1}` : ''
          });
         if (num4.length) this.setState({
            value: e.target.value += `-${num4}`
          });
          if (number21.length)this.setState({
            value: e.target.value += `-${number21}`
          });
          if (number22.length) this.setState({
            value: e.target.value += `-${number22}`
          });
          this.setState({
            phoneError: '',
        });
        
        }
      }

    render() {
        return (
            <label>
                <p>Телефон</p>
                <input
                    name='phone'
                    type='tel'
                    placeholder='X-XXXX-XX-XX'
                    value={this.state.value}
                    onChange={(e) => this.phoneFormat(e)}
                    onBlur={(e) => this.blurHandler(e)}
                />
                {(this.state.phoneDirty && this.state.phoneError) && <div className={style.error}>{this.state.phoneError}</div>}
            </label>
        )
    }
}

export default Phone