import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.Container}>
            <a href="#home" className={classes.Dots}></a>
            <a href="#skills" className={classes.Dots}></a>
            <a href="#experience" className={classes.Dots}></a>
        </div>
        
    );
}

export default Navigation;