import React from 'react';
import AboutMyself from '../AboutMyself/AboutMyself';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import StackTechnology from '../StackTechnology/StackTechnology';
import style from './MultilnputField.module.css';

class MultilnputField extends React.Component {
    render() {
        return (
            <div className={style.text}>
                <AboutMyself updateAboutMyself={this.props.updateAboutMyself} />
                <StackTechnology updateStack={this.props.updateStack} />
                <ProjectDescription updateDescription={this.props.updateDescription} />
            </div>
        )
    }

}

export default MultilnputField