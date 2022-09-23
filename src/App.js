import React from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MultiField from './components/MultiField/MultiField';
import SingleField from './components/SingleField/SingleField';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      name: '',
      user: {
        name: '',
        surname: '',
        birthday: '',
        phone: '',
        website: '',
        aboutYourself: '',
        technology: '',
        description: ''
      },
      errors: {
        nameError: '',
        surnameError: '',
        birthdayError: '',
        phoneError: '',
        websiteError: '',
        aboutYourselfError: '',
        technologyError: '',
        descriptionError: ''
      },
      validName: false,
      validSurname: false,
      validBirthday: false,
      validPhone: false,
      validWebsite: false,
      validAboutYourself: false,
      validTechnology: false,
      validDescription: false,
      counter:{
        aboutYourself: 600,
        technology: 600,
        description: 600,
      }
      
    };
  };

  updateData = (value, name) => {
    this.setState((state) => ({
      ...state,
      user: {
        ...state.user,
        [name]: value
      }
    }));
    this.setState((state) => ({
      ...state,
      counter: {
        ...state.user,
        [name]: 600 - value.length
      }
    }));
  }

  validation() {
  const name = this.state.user.name.trim();
    if (name) {
      if (name[0] !== name[0].toUpperCase()) {
        this.setState((state) => ({
          ...state,
          errors: {
            ...state.errors,
            nameError: 'Имя должно начинаться с большой буквы'
          }
        }));
      } else {
        this.setState({
          validName: true,
        })
      }
    } else {
      this.setState((state) => ({
        ...state,
        errors: {
          ...state.errors,
          nameError: 'Поле пустое. Заполните пожалуйста'
        }
      }));
    }
   const surname = this.state.user.surname.trim();
    if (surname) {
      if (surname[0] !== surname[0].toUpperCase()) {
        this.setState((state) => ({
          ...state,
          errors: {
            ...state.errors,
            surnameError: 'Фамилия должна начинаться с большой буквы'
          }
        }));
      } else {
        this.setState({
          validSurname: true,
        })
      }
    } else {
      this.setState((state) => ({
        ...state,
        errors: {
          ...state.errors,
          surnameError: 'Поле пустое. Заполните пожалуйста'
        }
      }));
    }
    if(this.state.user.birthday){
      this.setState({
        validBirthday: true,
      })
    }else {
      this.setState((state) => ({
        ...state,
        errors: {
          ...state.errors,
          birthdayError: 'Поле пустое. Заполните пожалуйста'
        }
      }));
    }
    
    if(this.state.user.phone){
      const re = /\d-\d{4}-\d{2}-\d{2}/g;
			 if(re.test(this.state.user.phone)){
        this.setState({
          validPhone: true,
        })
        }else{
          this.setState((state) => ({
            ...state,
            errors: {
              ...state.errors,
              phoneError: 'Можно вводить только цифры'
            }
          }));
        }
  }else{
    this.setState((state) => ({
      ...state,
      errors: {
        ...state.errors,
        phoneError: 'Поле пустое. Заполните пожалуйста'
      }
    }));
  }

  if(this.state.user.website){
    const res = this.state.user.website.match(/^(ftp|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/);
     if(res == null){
      this.setState((state) => ({
        ...state,
        errors: {
          ...state.errors,
          websiteError: 'Некорректный адрес сайта'
        }
      }));
      }else{
        this.setState({
          validWebsite: true,
        });
      }
}else{
  this.setState((state) => ({
    ...state,
    errors: {
      ...state.errors,
      websiteError: 'Поле пустое. Заполните пожалуйста'
    }
  }));
}

if (this.state.user.aboutYourself) {
   if (this.state.user.aboutYourself.trim().length <= 600) {
    this.setState({
      validAboutYourself: true,
    });
  }else{
    this.setState((state) => ({
      ...state,
      errors: {
        ...state.errors,
        aboutYourselfError: 'Превышен лимит символов в поле'
      }
    }));
  }
}else {
  this.setState((state) => ({
    ...state,
    errors: {
      ...state.errors,
      aboutYourselfError: 'Поле пустое. Заполните пожалуйста'
    }
  }));
}

if (this.state.user.technology) {
  if (this.state.user.technology.trim().length <= 600) {
   this.setState({
     validTechnology: true,
   });
 }else{
   this.setState((state) => ({
     ...state,
     errors: {
       ...state.errors,
       technologyError: 'Превышен лимит символов в поле'
     }
   }));
 }
}else {
 this.setState((state) => ({
   ...state,
   errors: {
     ...state.errors,
     technologyError: 'Поле пустое. Заполните пожалуйста'
   }
 }));
}

if (this.state.user.description) {
  if (this.state.user.description.trim().length <= 600) {
   this.setState({
     validDescription: true,
   });
 }else{
   this.setState((state) => ({
     ...state,
     errors: {
       ...state.errors,
       descriptionError: 'Превышен лимит символов в поле'
     }
   }));
 }
}else {
 this.setState((state) => ({
   ...state,
   errors: {
     ...state.errors,
     descriptionError: 'Поле пустое. Заполните пожалуйста'
   }
 }));
}

}
onClickSave(e) {
  e.preventDefault();
  this.validation();
    
  if(this.state.validName && this.state.validSurname && this.state.validBirthday && this.state.validPhone && this.state.validWebsite && this.state.validAboutYourself && this.state.validTechnology && this.state.validDescription){
    this.setState({
      isEditMode: true
    });
  }
}

  render() {
     return (
      <div className='App'>
        {(!this.state.isEditMode) &&
          <form>
              <SingleField
              type='text'
              placeholder='name'
              updateData={this.updateData}
              value={this.state.user.name}
            />
            {(this.state.errors.nameError) && <ErrorMessage message={this.state.errors.nameError}/>}
            <SingleField
              type='text'
              placeholder='surname'
              updateData={this.updateData}
              value={this.state.user.surname}
            />
            {(this.state.errors.surnameError) && <ErrorMessage message={this.state.errors.surnameError}/>}
            <SingleField
              type='date'
              placeholder='birthday'
              updateData={this.updateData}
              value={this.state.user.birthday}
            />
            {(this.state.errors.birthdayError) && <ErrorMessage message={this.state.errors.birthdayError}/>}
            <SingleField
              type='tel'
              placeholder='phone'
              placeholderPhone='X-XXXX-XX-XX'
              updateData={this.updateData}
              value={this.state.user.phone}
            />
            {(this.state.errors.phoneError) && <ErrorMessage message={this.state.errors.phoneError}/>}
            <SingleField
              type='url'
              placeholder='website'
              updateData={this.updateData}
              value={this.state.user.website}
            />
            {(this.state.errors.websiteError) && <ErrorMessage message={this.state.errors.websiteError}/>}
            <MultiField
              placeholder='aboutYourself'
              updateData={this.updateData}
              value={this.state.user.aboutYourself}
            />
            {(this.state.counter.aboutYourself >= 0) && <div className='counter'>{`Осталось ${this.state.counter.aboutYourself}/600 символов`}</div>}
            {(this.state.errors.aboutYourselfError) && <ErrorMessage message={this.state.errors.aboutYourselfError}/>}

            <MultiField
              placeholder='technology'
              updateData={this.updateData}
              value={this.state.user.technology}
            />
            {(this.state.counter.technology >= 0) && <div className='counter'>{`Осталось ${this.state.counter.technology}/600 символов`}</div>}
            {(this.state.errors.technologyError) && <ErrorMessage message={this.state.errors.technologyError}/>}

            <MultiField
              placeholder='description'
              updateData={this.updateData}
              value={this.state.user.description}
            />
            {(this.state.counter.description >= 0) && <div className='counter'>{`Осталось ${this.state.counter.description}/600 символов`}</div>}
            {(this.state.errors.descriptionError) && <ErrorMessage message={this.state.errors.descriptionError}/>}
            <div className='btn-container'>
            <button onClick={(e) => this.onClickSave(e)}>Save</button>
            <button>Cancel</button>
            </div>
                      </form>
        }
        {(this.state.isEditMode) &&
          <div>Questionnaire
            <h2>{this.state.user.name} {this.state.user.surname}</h2>
          </div>
        }
      </div>
    )
  }
}

export default App;