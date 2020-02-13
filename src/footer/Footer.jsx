import React from 'react';
import classes from './Footer.module.scss';
import profile from './profile.jpeg'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Resume}>
                <a href="/Profile.pdf" target="_blank" >PDF</a>
            </div>
            <img src={profile} className={classes.Profile} />
            <div className={classes.Resume}>
                <a href="/Profile.pdf" target="_blank" >PDF</a>
            </div>
        </div>
    );
}

export default Footer;