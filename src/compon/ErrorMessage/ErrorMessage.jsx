import React, { Component } from 'react';
import style from './ErrorMessage.module.css';

export class ErrorMessage extends Component {
  render() {
    return (
      <div className={style.error}>{this.props.message}</div>
    )
  }
}

export default ErrorMessage
