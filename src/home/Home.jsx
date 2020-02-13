import React from 'react';
import { Typer } from './typer';
import { Navigation } from './navigation';
import { Waves } from './waves';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div id='home' className={classes.Background}>
            <Waves side={'bottom'} />
            {/* <Navigation /> */}
            <Typer />
        </div>
        
    );
}

export default Home;