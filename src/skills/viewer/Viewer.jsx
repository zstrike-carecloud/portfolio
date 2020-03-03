import React, { useState } from 'react';
import classes from './Viewer.module.scss';
import Arrow from '../../home/Arrow.svg';

const Viewer = () => {
    const [currentSlide, setSlide] = useState(0);

    const carecloudEngineer = [`Lead feature team of 10 (8 engineers, 2 QA) in building front office portion of practice management software`,
    `Architect Backend Data Models/Orchestration with Microservices`,
    `Golang, C#, JS, Graphql, Netflix Orchestrator, FHIR`,
    `Implement and update UI features throughout configuration and booking views in React within Micro frontend architecture`,
    `Mentor direct reports across other feature teams`];
    const carecloudAutomation = [`Lead team of 11 engineers`,
    `Architected Automation Dashboard: Front/Backend in React/Graphql/Node.js`,
    `Implemented and oversaw multiple automation frameworks (UI/API testing)`,
    `Created RPA Dashboard in React with Graphql Backend Server`,
    `Hired/Mentored team of junior developers`];
    const JCI = [`Lead testing team for GLAS Thermostat project`,
    `Device/Web/Mobile testing`,
    `SQA Automation`];
    const Advicent = [`Implemented WCF services in C#`, `Wrote Specflow tests to verify database responses`, `Integration tests written in specflow to validate services`];
    const slides = [
        carecloudEngineer, carecloudAutomation, JCI, Advicent
    ];

    const clickRight = _ => {
        if (currentSlide < 3) {
            setSlide(currentSlide + 1)
        } else {
            setSlide(0)
        }
    }
    const clickLeft = _ => {
        if (currentSlide > 0) {
            setSlide(currentSlide - 1)
        } else {
            setSlide(slides.length - 1)
        }
    }


    return (
        <div className={classes.ViewerContainer}>
            <div className={classes.Viewer}>
                <div className={classes.ViewerBox} style={{ transform: `translate(${currentSlide * -450}px)` }} >
                    <div className={classes.Slide}>
                        <h2 className={classes.Header}>CareCloud</h2>
                        <h2 className={classes.Header}>Lead Software Engineer II</h2>
                        <ul className={classes.Text}>
                            {slides[0].map(bullet => <li>{bullet}</li>)}
                        </ul>
                    </div>
                    <div className={classes.Slide}>
                        <h2 className={classes.Header}>CareCloud Cont.</h2>
                        <h2 className={classes.Header}>Lead Software Engineer in Test</h2>
                        <ul className={classes.Text}>
                            {slides[1].map(bullet => <li>{bullet}</li>)}
                        </ul>
                    </div>
                    <div className={classes.Slide}>
                        <h2 className={classes.Header}>SafeNet Consulting</h2>
                        <h2 className={classes.Header}>IT Consultant</h2>
                        <ul className={classes.Text}>
                            {slides[2].map(bullet => <li>{bullet}</li>)}
                        </ul>
                    </div>
                    <div className={classes.Slide}>
                        <h2 className={classes.Header}>Advicent</h2>
                        <h2 className={classes.Header}>QA Engineer</h2>
                        <ul className={classes.Text}>
                            {slides[3].map(bullet => <li>{bullet}</li>)}
                        </ul>
                    </div>
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