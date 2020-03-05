import React from 'react';
import classes from './Typer.module.css';
import NameImg from '../Name.svg'
import Arrow from '../Arrow.svg';

const Typer = () => {
    const message1 = 'Keeping it Real. ';
    return (
        <div className={classes.Container}>
            <img src={NameImg} className={classes.Name} />
            <div className={classes.Typer}>
                <div className={classes.FirstBox}>
                    <h1 className={classes.Text}>
                        {message1}
                    </h1>
                </div>
                <div className={classes.SecondBox}>
                    <h1 className={classes.EndText}>
                    </h1>
                </div>
            </div>
            {/* <a href="#skills" className={classes.Arrow}>
                <img src={Arrow}  />
            </a> */}
        </div>
    );
}

export default Typer;