import React from 'react';
import classes from './Skills.module.css';
import graphic from './Graphic.svg';
import { Viewer } from './viewer';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <div id='skills' className={classes.Background}>
            <div className={classes.Content}>
                <Fade>
                    <h1 style={{ color: 'white', letterSpacing: '.15em', fontWeight: 'bolder', fontSize: '40px', fontStyle: 'normal' }}>Work Experience</h1>
                    <Viewer />
                </Fade>
                    <Fade left cascade>
                        <div className={classes.SkillsContainer}>
                            <div><h1 style={{ color: 'white', letterSpacing: '.15em', fontWeight: 'bolder', fontSize: '40px', fontStyle: 'normal' }}>Skills</h1></div>
                            <div className={classes.SkillsBox}>JS</div>
                            <div className={classes.SkillsBox}>React</div>
                            <div className={classes.SkillsBox}>NodeJS</div>
                            <div className={classes.SkillsBox}>GraphQL</div>
                        </div>
                    </Fade>
            </div>
            <img src={graphic} alt="profile" className={classes.Graphic} />
        </div>
    );
}

export default Skills;