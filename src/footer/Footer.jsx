import React from 'react';
import classes from './Footer.module.scss';
import profile from './Profile_round.svg'
import linkedIn from './linkedin.svg';
import resumeButton from './view_resume.svg';
import name from './Name_sm.svg';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <a href="https://www.linkedin.com/in/zachory-strike-1a77a782" target="_blank" className={classes.Resume} >
                <img src={linkedIn} />
            </a>
            <div className={classes.CenterContainer}>
                <img src={profile} className={classes.Profile} />
                <img src={name} className={classes.Name} />
                <p className={classes.EmailNumber}>zsstrike1@gmail.com | (262) 408 - 0640</p>
            </div>
            <a href="/Profile.pdf" target="_blank" className={classes.Resume}>
                <img src={resumeButton}  />
            </a>
        </div>
    );
}

export default Footer;