import React from 'react';
import classes from './Waves.module.css';

const Waves = ({ side }) => {
    const isBottom = side === 'bottom'
    console.log('isBottom', isBottom, side)
    const whichWave = isBottom ? classes.wave2 : classes.waveTop;
    return (
        <div className={isBottom ? classes.ocean : classes.oceanTop}>
            <div className={whichWave}></div>
            <div className={whichWave}></div>
            <div className={whichWave}></div>
        </div>
    );
}

export default Waves;