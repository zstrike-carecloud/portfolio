import React, { useState } from 'react';
import classes from './Viewer.module.scss';
import Arrow from '../../home/Arrow.svg';

const Viewer = () => {
    const [currentSlide, setSlide] = useState(0);
    const clickRight = _ => {
        currentSlide < 2 && setSlide(currentSlide + 1);
    }
    const clickLeft = _ => {
        currentSlide > 0 && setSlide(currentSlide - 1);
    }
    const carecloudEngineer = [`Lead feature team of 10 (8 engineers, 2 QA) in building front office portion of practice management software (https://www.carecloud.com/go/)`,
    `Architect Backend Data Models/Orchestration with Microservices`,
    `Golang, C#, JS, Graphql, Netflix Orchestrator, FHIR`,
    `Implement and update UI features throughout configuration and booking views in React within Micro frontend architecture`,
    `Mentor direct reports across other feature teams`];
    const carecloudAutomation = [`Lead team of 11 engineers`,
    `Architected Automation Dashboard: Front/Backend in React/Graphql/Node.js`,
    `Implemented and oversaw multiple automation frameworks (UI/API testing)`,
    `Created RPA Dashboard in React with Graphql Backend Server`,
    `Hired/Mentored team of junior developers`];
    const JCI = `Slide 2`
    const Centare = `Slide 3`
    const slides = [
        carecloudEngineer, carecloudAutomation, JCI, Centare
    ];

    return (
        <div className={classes.ViewerContainer}>
            <div className={classes.Viewer}>
                <div className={classes.ViewerBox} style={{ transform: `translate(${currentSlide * -450}px)` }} >
                    <div className={classes.Slide}>
                        <h2 className={classes.Header}>CareCloud</h2>
                        <h2 className={classes.Header}>Lead Software Engineer II</h2>
                        <ul className={classes.Text}>
                            <li>{slides[0][0]}</li>
                            <li>{slides[0][1]}</li>
                            <li>{slides[0][2]}</li>
                            <li>{slides[0][3]}</li>
                            <li>{slides[0][4]}</li>
                        </ul>
                        {/* <p className={classes.Text}>{slides[0]}</p> */}
                    </div>
                    <div className={classes.Slide}>
                    <h2 className={classes.Header}>CareCloud Cont.</h2>
                        <h2 className={classes.Header}>Lead Software Engineer in Test </h2>
                        <ul className={classes.Text}>
                            <li>{slides[1][0]}</li>
                            <li>{slides[1][1]}</li>
                            <li>{slides[1][2]}</li>
                            <li>{slides[1][3]}</li>
                            <li>{slides[1][4]}</li>
                        </ul>
                    </div>
                    <div className={classes.Slide}>
                        <p className={classes.Text}>{slides[2]}</p>
                    </div>
                </div>
            </div>
            <img src={Arrow} onClick={clickLeft} className={classes.LeftArrow} />
            <img src={Arrow} onClick={clickRight} className={classes.RightArrow} />
            {/* <i className={"icono-arrow1-right"} onClick={clickLeft} />
            <i className={"icono-arrow1-left"} onClick={clickRight} /> */}
        </div>
    );
}

export default Viewer;