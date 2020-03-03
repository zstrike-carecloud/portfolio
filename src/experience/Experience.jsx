import React from 'react';
import classes from './Experience.module.scss';
import { Waves } from '../home/waves';
import { Footer } from '../footer';
import Go from './platforms-new.png'
import Glas from './Johnson-Controls-GLAS-Microsoft.jpg';
import Naviplan from './Naviplan.jpeg';

const Experience = () => {
    const goTasks = `Architected the front-office portion of the app while leading a team of 11`;
    const glasTasks = `Lead testing/automation team across device, web, and mobile platforms`;
    const advicentTasks = `Wrote service implementations and integration tests`;

    return (
        <div id='experience' className={classes.Background}>
            <Waves side={'top'} />
            <div className={classes.Content} >
                <h1 className={classes.Title}>Links</h1>
                <div className={classes.One}>
                    <div className={classes.overlay}>
                        <div style={{ padding: '30px', fontSize: 20 }}>
                            <h3>CareCloud Go</h3>
                            <p>{goTasks}</p>
                        </div>
                    </div>
                    <a href="https://www.carecloud.com/go" target="_blank">
                        <img style={{ objectFit: 'contain' }} src={Go} className={classes.Image} />
                    </a>
                </div>
                <div className={classes.Two}>
                    <div className={classes.overlay}>
                        <div style={{ padding: '30px', fontSize: 20 }}>
                            <h3>JCI GLAS</h3>
                            <p>{glasTasks}</p>
                        </div>
                    </div>
                    <a href="https://glas.johnsoncontrols.com" target="_blank">
                        <img src={Glas} className={classes.Image} />
                    </a>
                </div>
                <div className={classes.Three}>
                    <div className={classes.overlay}>
                        <div style={{ padding: '30px', fontSize: 20 }}>
                            <h3>Advicent</h3>
                            <p>{advicentTasks}</p>
                        </div>
                    </div>
                    <a href="https://www.advicentsolutions.com/products/naviplan" target="_blank">
                        <img src={Naviplan} className={classes.Image} alt="logo" />
                    </a>
                </div>
                <div className={classes.FooterWrapper}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Experience;