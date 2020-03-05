import React from 'react';
import classes from './DownArrow.module.scss';
import Arrow from './Arrow.svg';

const DownArrow = ({ handleDownArrowClick }) => {
    return (
        // <a href="#skills" className={classes.Arrow}>
            <img src={Arrow} onClick={_ => handleDownArrowClick('Skills')} className={classes.DownArrow} />
        // </a> 
    );
}

export default DownArrow;