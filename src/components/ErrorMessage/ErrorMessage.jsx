import React from 'react';
import style from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return (
    <div className={style.error}>{message}</div>
  )
}

export default ErrorMessage
