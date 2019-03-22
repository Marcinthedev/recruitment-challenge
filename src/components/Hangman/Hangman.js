import React from 'react'
import classes from './Hangman.css'

const Hangman = (props) => {
    const count = props.count;
    const elements = props.elements;
    const hangmanToShow = elements.filter((value,index)=> index<= count)
        .map((value,index)=><div key={index} className={classes[`${value}`]}></div>
            );

    return (
        <div className={classes.hangman}>
            {hangmanToShow}
        </div>
    )
}

export default Hangman;