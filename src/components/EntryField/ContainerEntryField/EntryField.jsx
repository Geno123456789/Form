import React from 'react';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import style from './EntryField.module.css';
import NameField from '../NameField/NameField';
import Phone from '../Phone/Phone';
import SiteField from '../SiteField/SiteField';
import SurnameField from '../SurnameField/SurnameField';

class EntryField extends React.Component {
 
    render() {
        return (
            <div className={style.field}>
                <NameField 
                // updateData={this.props.updateData} value={this.props.value} error={this.props.error} 
                />
                <SurnameField updateDataSurname={this.props.updateDataSurname} />
                <DateOfBirth updateDateOfBirth={this.props.updateDateOfBirth}/>
                <Phone updatePhone={this.props.updatePhone} />
                <SiteField updateSite={this.props.updateSite}/>
            </div>
        )
    }

}

export default EntryField