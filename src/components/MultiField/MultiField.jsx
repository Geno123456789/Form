import React from 'react';
import style from './MultiField.module.css';

export default function MultiField({ nameField, placeholder, updateData, value }) {
    function handlerChange(e) {
        updateData(e.target.value, nameField);
    }
    return (
        <div className={style.multiFieldContainer}>
            <label>
                <p>{placeholder}</p>
                <textarea
                    rows='7'
                    maxLength={601}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handlerChange(e)}
                ></textarea>
            </label>
        </div>
    );
}
