import React from 'react';
import AboutMyself from '../AboutMyself/AboutMyself';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import StackTechnology from '../StackTechnology/StackTechnology';
import style from './MultilnputField.module.css';

class MultilnputField extends React.Component {
    render() {
        return (
            <div className={style.text}>
              <AboutMyself />
              <StackTechnology />
              <ProjectDescription />
               {/* <label>
                   <p>Описание последнего проекта</p>
                  <textarea placeholder='Описание последнего проекта' rows='7'></textarea>
               </label> */}
               </div>
        )
    }

}

export default MultilnputField