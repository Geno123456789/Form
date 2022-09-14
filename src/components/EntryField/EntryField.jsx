import React from 'react';
import style from './EntryField.module.css';

class EntryField extends React.Component {
    render() {
        return (
            <>
            <label>
                <p>{this.props.name}</p>
                <input className={style.field} type={this.props.type} placeholder={this.props.name} />
            </label>
            </>
        )
    }

}

export default EntryField