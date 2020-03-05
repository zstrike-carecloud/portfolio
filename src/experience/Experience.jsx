import React from 'react';
import classes from './Experience.module.scss';
import { Waves } from '../home/waves';
import { Footer } from '../footer';
import Go from './platforms-new.png'
import Glas from './Johnson-Controls-GLAS-Microsoft.jpg';
import Naviplan from './Naviplan.jpeg';

const Experience = () => {
    const goTasks = {
        name: 'CareCloud Go',
        description: 'Architected the front-office portion of the app while leading a team of 11',
        link: 'https://www.carecloud.com/go',
        image: Go,
    };
    const glasTasks = {
        name: 'JCI GLAS',
        description: `Lead testing/automation team across device, web, and mobile platforms`,
        link: 'https://glas.johnsoncontrols.com',
        image: Glas,
    };
    const advicentTasks = {
        name: 'JCI GLAS',
        description: 'Wrote service implementations and integration tests',
        link: 'https://www.advicentsolutions.com/products/naviplan',
        image: Naviplan,
    };
    const projects = [
        goTasks, glasTasks, advicentTasks,
    ];

    return (
        <div id='experience' className={classes.Background}>
            <Waves side={'top'} />
            <div className={classes.Content} >
                <h1 className={classes.Title}>Links</h1>
                {
                    projects.map((project, idx) => {
                        return (
                            <div className={classes.Link} style={{ gridColumn: idx + 1 }}>
                                <div className={classes.overlay}>
                                    <div style={{ padding: '30px', fontSize: 20 }}>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <a href={project.link} target="_blank">
                                    <img style={{ objectFit: idx === 0 ? 'contain' : 'cover' }} src={project.image} className={classes.Image} />
                                </a>
                            </div>
                        );
                    })
                }
                <div className={classes.FooterWrapper}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Experience;