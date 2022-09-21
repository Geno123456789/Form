import React, { Component } from 'react';
import EntryField from './components/EntryField/ContainerEntryField/EntryField';
import MultilnputField from './components/MultilnputField/ContainerMultiField/MultilnputField';
import './App.css';

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
  } 
//   updateData = (value) => {
//     this.setState({ 
//       nameField: value })
//  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {(!this.state.isShowQuestionnaire) ?          
        <form>
          <h1>Создание анкеты</h1>
          <EntryField updateData={this.updateData}/>
          <MultilnputField />
          {/* <AboutMyself updateData={this.updateData}/> */}
          <div className='btn-container'>
            <button>Отмена</button>
            <button onClick={() => this.showQuestionnaire()}>Сохранить</button>
          </div>
        </form> : <div>`Questionnaire ${this.state.name.value}`</div>
        }
      </div>
    );
  }

}




// class AboutMyself extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         value: '',
  //         aboutMyself: '',
  //         aboutMyselfDirty: false,
  //         aboutMyselfError: 'Поле пустое. Заполните пожалуйста',
  //         counter: 600
  //     };
  // }
  // blurHandler(e) {
  //     if (e.target.name) {
  //         this.setState({
  //             aboutMyselfDirty: true,
  //         })
  //     }
  //     this.props.updateData(this.state)
  // }
  // handlerChange(e) {
  //     this.setState({
  //         value: e.target.value,
  //     });
  //     if (e.target.value.trim().length === 0) {
  //         this.setState({
  //             aboutMyselfError: 'Поле пустое. Заполните пожалуйста',
  //         });
  //     } else if (e.target.value.trim().length > 600) {
  //         this.setState({
  //             aboutMyselfError: 'Превышен лимит символов в поле',
  //         });
  //     }
  //     else {
  //         this.setState({
  //             aboutMyselfError: '',
  //         });
  //     }
  //     this.setState({
  //         counter: 600 - e.target.value.trim().length,
  //     });
  // }
 
  //   render() {
  //     return (
  //         <label>
  //             <p>О себе</p>
  //             <textarea
  //                 name='aboutMyself'
  //                 placeholder='О себе'
  //                 rows='7'
  //                 value={this.state.value}
  //                 onChange={(e) => this.handlerChange(e)}
  //                 onBlur={(e) => this.blurHandler(e)}
  //                 maxLength='601'
  //             ></textarea>
  //             {(this.state.counter >= 0) && <div className='counter'>{`Осталось ${this.state.counter}/600 символов`}</div>}
  //             {(this.state.aboutMyselfDirty && this.state.aboutMyselfError) && <div className='error'>{this.state.aboutMyselfError}</div>}
  //         </label>
  //     )
  // }
// }


export default App;
