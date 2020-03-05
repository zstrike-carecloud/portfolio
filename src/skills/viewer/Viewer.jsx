import React, { useState } from 'react';
import classes from './Viewer.module.scss';
import Arrow from '../../home/Arrow.svg';

const Viewer = () => {
    const [currentSlide, setSlide] = useState(0);

    const carecloudEngineer = {
        company: 'CareCloud',
        position: 'Lead Software Engineer II',
        bullets: [`Lead feature team of 10 (8 engineers, 2 QA) in building front office portion of practice management software`,
        `Architect Backend Data Models/Orchestration with Microservices`,
        `Golang, C#, JS, Graphql, Netflix Orchestrator, FHIR`,
        `Implement and update UI features throughout configuration and booking views in React within Micro frontend architecture`,
        `Mentor direct reports across other feature teams`],
    };

    const carecloudAutomation = {
        company: 'CareCloud Cont.',
        position: 'Lead Software Engineer in Test',
        bullets: [`Lead team of 11 engineers`,
        `Architected Automation Dashboard: Front/Backend in React/Graphql/Node.js`,
        `Implemented and oversaw multiple automation frameworks (UI/API testing)`,
        `Created RPA Dashboard in React with Graphql Backend Server`,
        `Hired/Mentored team of junior developers`],
    };

    const JCI = {
        company: 'SafeNet Consulting',
        position: 'IT Consultant',
        bullets: [`Lead testing team for GLAS Thermostat project`,
        `Device/Web/Mobile testing`,
        `SQA Automation`],
    };

    const Advicent = {
        company: 'Advicent',
        position: 'Automation Engineer',
        bullets: [`Implemented WCF services in C#`, `Wrote Specflow tests to verify database responses`, `Integration tests written in specflow to validate services`],
    };

    const slides = [
        carecloudEngineer, carecloudAutomation, JCI, Advicent
    ];

    const clickRight = _ => {
        currentSlide < 3 ? setSlide(currentSlide + 1) : setSlide(0);
    };
    const clickLeft = _ => {
        currentSlide > 0 ? setSlide(currentSlide - 1) : setSlide(slides.length - 1);
    };

    return (
        <div className={classes.ViewerContainer}>
            <div className={classes.Viewer}>
                <div className={classes.ViewerBox} style={{ transform: `translate(${currentSlide * -450}px)`, width: `${slides.length * 100}%` }} >
                    {
                        slides.map(profile => {
                            return (
                                <div className={classes.Slide}>
                                    <h2 className={classes.Header}>{profile.company}</h2>
                                    <h2 className={classes.Header}>{profile.position}</h2>
                                    <ul className={classes.Text}>
                                        {profile.bullets.map(bullet => <li>{bullet}</li>)}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.ViewerNavigation}>
                <img src={Arrow} onClick={clickLeft} className={classes.LeftArrow} />
                <div className={classes.Indicators}>
                    {slides.map((_, idx) => <div onClick={_ => setSlide(idx)} style={{ opacity: idx === currentSlide ? 1 : .4}} />)}
                </div>
                <img src={Arrow} onClick={clickRight} className={classes.RightArrow} />
            </div>

        </div>
    );
}

export default Viewer;