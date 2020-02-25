import React from 'react';
import classes from './Experience.module.scss';
import { Waves } from '../home/waves';
import { Footer } from '../footer';
import Go from './platforms-new.png'
import Glas from './Johnson-Controls-GLAS-Microsoft.jpg';
import Naviplan from './Naviplan.jpeg';

const Experience = () => {
    return (
        <div id='experience' className={classes.Background}>
            <Waves side={'top'} />
            <div className={classes.Content} >
                <h1 className={classes.Title}>Links</h1>
                <a href="https://www.carecloud.com/go" target="_blank" className={classes.One}>
                    <img style={{ objectFit: 'contain' }} src={Go} className={classes.Image} />
                </a>
                <a href="https://glas.johnsoncontrols.com" target="_blank" className={classes.Two}>
                    <img src={Glas} className={classes.Image} />
                </a>
                <a href="https://www.advicentsolutions.com/products/naviplan" target="_blank" className={classes.Three}>
                    <img src={Naviplan} className={classes.Image} alt="logo" />
                </a>
                <div className={classes.FooterWrapper}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Experience;