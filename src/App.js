import { Component } from 'react';
import './App.css';
import EntryField from './components/EntryField/EntryField';
import MultilnputField from './components/MultilnputField/ContainerMultiField/MultilnputField';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowQuestionnaire: false,

    };
  }
  showQuestionnaire() {
    this.setState({
      isShowQuestionnaire: true,
      
  });
  console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        {(!this.state.isShowQuestionnaire) ?          
        <form>
          <h1>Создание анкеты</h1>
          <EntryField />
          <MultilnputField />
          <div className='btn-container'>
            <button>Отмена</button>
            <button onClick={() => this.showQuestionnaire()}>Сохранить</button>
          </div>
        </form> : <div>Questionnaire</div>
        }
      </div>
    );
  }

}

export default App;
