import React, { Component } from 'react';
import EntryField from './components/EntryField/ContainerEntryField/EntryField';
import MultilnputField from './components/MultilnputField/ContainerMultiField/MultilnputField';
import './App.css';
import NameField from './components/EntryField/NameField/NameField';
import ErrorMessage from './compon/ErrorMessage/ErrorMessage';
import SurnameField from './components/EntryField/SurnameField/SurnameField';
import Input from './compon/SingleField/SingleField';
import Textarea from './compon/MultiField/MultiField';
import MultiField from './compon/MultiField/MultiField';
import SingleField from './compon/SingleField/SingleField';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditMode: false,
//       user: {
// 				name: '',
// 				surname: '',
// 				birthday: '',
// 				phone: '',
// 				website: '',
// 				aboutYourself: '',
// 				technology: '',
// 				lastProject: ''
// 			},
//       error: {
// 				nameError: '',
// 				surnameError: '',
// 				birthdayError: '',
// 				phoneError: '',
// 				websiteError: '',
// 				aboutYourselfError: '',
// 				technologyError: '',
// 				lastProjectError: ''
// 			},
//       valid: false,
//     };
//     this.validation = this.validation.bind(this);
//   }
// onSave() {
//   if(this.state.user.name && this.state.valid){
//     this.setState({
//       isEditMode: true,
//     })
//   }
// }
//   updateData = (value) => {
//     this.validation();
//     this.setState((state) => ({
// 			...state,
// 			user: {
// 				...state.user,
// 				name: value
// 			}
// 		}));

//     console.log(this.state)
//   }

// validation() {
//   if(this.state.user.name){
//     if (this.state.user.name.trim().length === 0) {
//       this.setState((state) => ({
//         ...state,
//         error: {
//           ...state.error,
//           nameError: 'Поле пустое. Заполните пожалуйста'
//         }
//       }));

//   } else if (this.state.user.name[0] !==this.state.user.name[0].toUpperCase()) {
//     this.setState((state) => ({
//       ...state,
//       error: {
//         ...state.error,
//         nameError: 'Имя должно начинаться с большой буквы'
//       }
//     }));
//   }
//   else {
//     this.setState((state) => ({
//       ...state,
//       error: {
//         ...state.error,
//         nameError: ''
//       }
//     }));
//     this.setState({
//       valid: true,
//     })
//   }
//   }


// }



// // updateData = (value) => {
// //   this.setState({
// //     nameField: value,

// //   })
// //   // console.log(this.state)
// // }


//   updateDataSurname = (value) => {
//     this.setState({
//       surnameField: value,
//     })
//   }
//   updateDateOfBirth = (value) => {
//     this.setState({
//       dateOfBirth: value,
//     })
//   }
//   updatePhone = (value) => {
//     this.setState({
//       phone: value,
//     })
//   }
//   updateSite = (value) => {
//     this.setState({
//       site: value,
//     })
//   }
//   updateAboutMyself = (value) => {
//     this.setState({
//       aboutMyself: value,
//     })
//   }
//   updateStack = (value) => {
//     this.setState({
//       stack: value,
//     })
//   }
//   updateDescription = (value) => {
//     this.setState({
//       description: value,
//     })
//   }

//   render() {
//       return (
//       <div className="App">
//         {(!this.state.isEditMode) ?
//           <form>
//             <h1>Создание анкеты</h1>
//             <NameField 
//             value={this.state.user.name}
//             error={this.state.error.nameError}
//             updateData={this.updateData} 
//             />
//             {!(this.state.valid) && <ErrorMessage message={this.state.error.nameError}/>}
//             {/* <EntryField
//             // value={this.state.user.name}
//             // error={this.state.error.nameError}
//               // updateData={this.updateData}
//               updateDataSurname={this.updateDataSurname}
//               updateDateOfBirth={this.updateDateOfBirth}
//               updatePhone={this.updatePhone}
//               updateSite={this.updateSite}
//             />
//             <MultilnputField 
//               updateAboutMyself={this.updateAboutMyself}
//               updateStack={this.updateStack}
//               updateDescription={this.updateDescription}
//             /> */}
//             <div className='btn-container'>
//               <button>Отмена</button>
//               <button onClick={() => this.onSave()}>Сохранить</button>
//             </div>
//           </form> : <div>Questionnaire
//             {/* <h1>{this.state.nameField.value} {this.state.surnameField.value}</h1> */}
//             {/* <p>{this.state.dateOfBirth.value}</p>
//             <p>{this.state.phone.value}</p>
//             <p>{this.state.site.value}</p>
//             <p>{this.state.aboutMyself.value}</p>
//             <p>{this.state.stack.value}</p>
//             <p>{this.state.description.value}</p> */}
//           </div>
//         }
//       </div>
//     );
//   }

// }


// export default App;



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