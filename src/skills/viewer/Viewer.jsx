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
    const carecloudSkills = `Lead feature team of 10 (8 engineers, 2 QA) in building front office portion of practice management software (https://www.carecloud.com/go/)
    Architect Backend Data Models/Orchestration with Microservices
    -Golang, C#, JS, Graphql, Netflix Orchestrator, FHIR
    Implement and update UI features throughout configuration and booking views in React within Micro frontend architecture
    Mentor direct reports across other feature teams`
    const JCI = `Slide 2`
    const Centare = `Slide 3`
    const slides = [
        carecloudSkills, JCI, Centare
    ];

    return (
        <div className={classes.ViewerContainer}>
            <div className={classes.Viewer}>
                <div className={classes.ViewerBox} style={{ transform: `translate(${currentSlide * -450}px)` }} >
                    <div className={classes.Slide}>
                        <p className={classes.Text}>{slides[0]}</p>
                    </div>
                    <div className={classes.Slide}>
                        <p className={classes.Text}>{slides[1]}</p>
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