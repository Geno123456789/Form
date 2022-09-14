import { Component } from 'react';
import './App.css';
import EntryField from './components/EntryField/EntryField';
import MultilnputField from './components/MultilnputField/MultilnputField';


class App extends Component {
  render() {
    return (
      <form className="App">
        <h1>Создание анкеты</h1>
        <EntryField name='Имя' type='text' />
        <EntryField name='Фамилия' type='text' />
        <EntryField name='Дата рождения' type='date' />
        <EntryField name='Телефон' type='tel' />
        <EntryField name='Сайт' type='url' />
        <MultilnputField name='О себе' />
        <MultilnputField name='Стек технологий' />
        <MultilnputField name='Описание последнего проекта' />
        <div className='btn-container'>
          <button>Отмена</button>
          <button>Сохранить</button>
        </div>
      </form>
    );
  }

}

export default App;
