import React from 'react'
import classes from './MissedLetters.css'
const MissedLetters = (props) => {

    const missed = props.missed.map((value,index)=>{
        return(
        <div key={index} className={classes["missed-letter"]}>{value}</div>
        )
    });
    return (
        <div className={classes["missed-letters"]}>
            <span className={classes["missed-letters span"]}>You missed:</span>
            <div className={classes["missed-letters-block"]}>
                {missed}
            </div>
        </div>
    )
}

export default MissedLetters;