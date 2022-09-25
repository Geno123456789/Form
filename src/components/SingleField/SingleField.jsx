import React from 'react';
import style from './SingleField.module.css';

export default function SingleField({ type, nameField, nameFieldPhone, placeholder, updateData, value }) {
    function phoneFormat(e) {
        updateData(e.target.value, nameField);
        let content = e.target.value;
        if (content) {
            content = Array.from(content).filter(ltr => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58);
            let [numberOfDigits_1, numberOfDigits_4, numberOfDigits_2, numberOfDigits2] = [
                content[0],
                content.slice(1, 5).join(''),
                content.slice(5, 7).join(''),
                content.slice(7, 9).join(''),
            ]
            updateData(e.target.value = numberOfDigits_1.length ? `${numberOfDigits_1}` : '', nameField);
            if (numberOfDigits_4.length) {
                updateData(e.target.value += `-${numberOfDigits_4}`, nameField);
            }
            if (numberOfDigits_2.length) {
                updateData(e.target.value += `-${numberOfDigits_2}`, nameField);
            }
            if (numberOfDigits2.length) {
                updateData(e.target.value += `-${numberOfDigits2}`, nameField);
            }
        }
    }

    function handlerChange(e) {
        updateData(e.target.value, nameField);
    }

    return (
        <div className={style.singleFieldContainer}>
            <label>
                <p>{nameField === 'phone' ? nameFieldPhone : placeholder}</p>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => nameField === 'phone' ? phoneFormat(e) : handlerChange(e)}
                />
            </label>
        </div>
    );
}