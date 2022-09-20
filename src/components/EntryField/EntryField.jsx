import React from 'react';
import DateOfBirth from './DateOfBirth/DateOfBirth';
import style from './EntryField.module.css';
import NameField from './NameField/NameField';
import Phone from './Phone/Phone';
import SiteField from './SiteField/SiteField';
import SurnameField from './SurnameField/SurnameField';

class EntryField extends React.Component {

    render() {
        return (
            <div className={style.field}>
              <NameField />
              <SurnameField />
              <DateOfBirth />      
              <Phone />  
              <SiteField /> 
                {/* <label>
                    <p>Сайт</p>
                    <input type='url' placeholder='Введите сайт' />
                </label> */}
            </div>
        )
    }

}

export default EntryField