import React from 'react';
import classes from './Footer.module.scss';
import profile from './Profile_round.svg'
import linkedIn from './LinkedIn_button.svg';
import resumeButton from './resume_button.svg';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <a href="https://www.linkedin.com/in/zachory-strike-1a77a782" target="_blank" className={classes.Resume} >
                <img src={linkedIn} />
            </a>
            <img src={profile} className={classes.Profile} />
            <a href="/Profile.pdf" target="_blank" className={classes.Resume}>
                <img src={resumeButton}  />
            </a>
        </div>
    );
}

export default Footer;