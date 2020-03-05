import React, { useRef } from 'react';
import { Typer } from './typer';
import { Navigation } from '../navigation';
import { Waves } from './waves';
import classes from './Home.module.css';
import Arrow from './Arrow.svg';
import { DownArrow } from '../navigation';

const Home = ({ handleDownArrowClick }) => {

    return (
        <div id='home' className={classes.Background}>
            <Waves side={'bottom'} />
            {/* <Navigation /> */}
            <Typer />
            <div className={classes.DownArrow}>
                <DownArrow handleDownArrowClick={handleDownArrowClick} />
            </div>
            {/* <a href="#skills" className={classes.Arrow}>
                <img src={Arrow}  />
            </a> */}
        </div>
        
    );
}

export default Home;