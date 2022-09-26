import React, { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MultiField from './components/MultiField/MultiField';
import SingleField from './components/SingleField/SingleField';

export function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    name: '',
    surname: '',
    birthday: '',
    phone: '',
    website: '',
    aboutYourself: '',
    technology: '',
    description: ''
  });
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [websiteError, setWebsiteError] = useState('');
  const [aboutYourselfError, setAboutYourselfError] = useState('');
  const [technologyError, setTechnologyError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const [validName, setValidName] = useState(false);
  const [validSurname, setValidSurname] = useState(false);
  const [validBirthday, setValidBirthday] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validWebsite, setValidWebsite] = useState(false);
  const [validAboutYourself, setValidAboutYourself] = useState(false);
  const [validTechnology, setValidTechnology] = useState(false);
  const [validDescription, setValidDescription] = useState(false);

  const [counter, setCounter] = useState({
    aboutYourself: 600,
    technology: 600,
    description: 600,
  });


  function updateData(value, name) {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    setCounter((prevUser) => ({
      ...prevUser,
      [name]: 600 - value.length
    }));
  }

  function validation() {
    const name = user.name.trim();
    if (name) {
      if (name[0] !== name[0].toUpperCase()) {
        setNameError('Имя должно начинаться с большой буквы');
      } else {
        setValidName(true);
      }
    } else {
      setNameError('Поле пустое. Заполните пожалуйста');
    }
    const surname = user.surname.trim();
    if (surname) {
      if (surname[0] !== surname[0].toUpperCase()) {
        setSurnameError('Фамилия должна начинаться с большой буквы');
      } else {
        setValidSurname(true)
      }
    } else {
      setSurnameError('Поле пустое. Заполните пожалуйста');
    }
    if (user.birthday) {
      setValidBirthday(true)
    } else {
      setBirthdayError('Поле пустое. Заполните пожалуйста');
    }

    if (user.phone) {
      const re = /\d-\d{4}-\d{2}-\d{2}/g;
      if (re.test(user.phone)) {
        setValidPhone(true)
      } else {
        setPhoneError('Можно вводить только цифры');
      }
    } else {
      setPhoneError('Поле пустое. Заполните пожалуйста');
    }

    if (user.website) {
      const res = user.website.match(/^(ftp|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/);
      if (res == null) {
        setWebsiteError('Некорректный адрес сайта');
      } else {
        setValidWebsite(true);
      }
    } else {
      setWebsiteError('Поле пустое. Заполните пожалуйста');
    }

    if (user.aboutYourself) {
      if (user.aboutYourself.trim().length <= 600) {
        setValidAboutYourself(true);
      } else {
        setAboutYourselfError('Превышен лимит символов в поле');
      }
    } else {
      setAboutYourselfError('Поле пустое. Заполните пожалуйста');
    }

    if (user.technology) {
      if (user.technology.trim().length <= 600) {
        setValidTechnology(true);
      } else {
        setTechnologyError('Превышен лимит символов в поле');
      }
    } else {
      setTechnologyError('Поле пустое. Заполните пожалуйста');
    }

    if (user.description) {
      if (user.description.trim().length <= 600) {
        setValidDescription(true);
      } else {
        setDescriptionError('Превышен лимит символов в поле');
      }
    } else {
      setDescriptionError('Поле пустое. Заполните пожалуйста');
    }
  }

  useEffect(() => {
    if (validName && validSurname && validBirthday && validPhone && validWebsite &&
      validAboutYourself && validTechnology && validDescription) {
      setIsEditMode(true);
    }
  }, [validation])

  function onClickSave() {
    validation();
  }

  function onClearFields() {
    setUser({
      name: '',
      surname: '',
      birthday: '',
      phone: '',
      website: '',
      aboutYourself: '',
      technology: '',
      description: ''
    });
    setNameError('');
    setSurnameError('');
    setBirthdayError('');
    setPhoneError('');
    setWebsiteError('');
    setAboutYourselfError('');
    setTechnologyError('');
    setDescriptionError('');
  }

  return (
    <div className='App'>
      {(!isEditMode) &&
        <form>
          <h1>Сreating a form</h1>
          <SingleField
            type='text'
            nameField='name'
            placeholder='Name'
            updateData={updateData}
            value={user.name}
          />
          {(!validName) && <ErrorMessage message={nameError} />}
          <SingleField
            type='text'
            nameField='surname'
            placeholder='Surname'
            updateData={updateData}
            value={user.surname}
          />
          {(!validSurname) && <ErrorMessage message={surnameError} />}
          <SingleField
            type='date'
            nameField='birthday'
            placeholder='Date of birth'
            updateData={updateData}
            value={user.birthday}
          />
          {(!validBirthday) && <ErrorMessage message={birthdayError} />}
          <SingleField
            type='tel'
            nameField='phone'
            nameFieldPhone='Phone number'
            placeholder='X-XXXX-XX-XX'
            updateData={updateData}
            value={user.phone}
          />
          {(!validPhone) && <ErrorMessage message={phoneError} />}
          <SingleField
            type='url'
            nameField='website'
            placeholder='Website'
            updateData={updateData}
            value={user.website}
          />
          {(!validWebsite) && <ErrorMessage message={websiteError} />}
          <MultiField
            nameField='aboutYourself'
            placeholder='About yourself'
            updateData={updateData}
            value={user.aboutYourself}
          />
          {(counter.aboutYourself >= 0 && user.aboutYourself) && <div className='counter'>{`Осталось ${counter.aboutYourself}/600 символов`}</div>}
          {(!validAboutYourself) && <ErrorMessage message={aboutYourselfError} />}
          <MultiField
            nameField='technology'
            placeholder='Technology stack'
            updateData={updateData}
            value={user.technology}
          />
          {(counter.technology >= 0 && user.technology) && <div className='counter'>{`Осталось ${counter.technology}/600 символов`}</div>}
          {(!validTechnology) && <ErrorMessage message={technologyError} />}
          <MultiField
            nameField='description'
            placeholder='Description of the latest project'
            updateData={updateData}
            value={user.description}
          />
          {(counter.description >= 0 && user.description) && <div className='counter'>{`Осталось ${counter.description}/600 символов`}</div>}
          {(!validDescription) && <ErrorMessage message={descriptionError} />}
          <div className='btn-container'>
            <button type='button' onClick={onClickSave}>Save</button>
            <button type='button' onClick={onClearFields}>Cancel</button>
          </div>
        </form>
      }
      {(isEditMode) &&
        <div className='questionnaire'>
          <table>
            <caption>{user.name} {user.surname}</caption>
            <tbody>
              <tr>
                <td>Date of birth:</td>
                <td>{user.birthday}</td>
              </tr>
              <tr>
                <td>Phone number:</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>{user.website}</td>
              </tr>
              <tr>
                <td>About yourself:</td>
                <td>{user.aboutYourself}</td>
              </tr>
              <tr>
                <td>Technology stack:</td>
                <td>{user.technology}</td>
              </tr>
              <tr>
                <td>Description of the latest project:</td>
                <td>{user.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default App;