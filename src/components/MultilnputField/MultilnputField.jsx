import React from 'react';
import style from './MultilnputField.module.css';

class MultilnputField extends React.Component {
    render() {
        return (
            <>
            <label>
                <p>{this.props.name}</p>
               <textarea className={style.text} placeholder={this.props.name} rows='7'></textarea>
            </label>
            </>
        )
    }

}

export default MultilnputField