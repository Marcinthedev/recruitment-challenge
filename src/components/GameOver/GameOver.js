import React from 'react';
import classes from './GameOver.css'
const GameOver = (props) =>{
    let result='';
    if(props.won===true){
        result='You won';
    }
    else{
        result='You lose';
    }
        return (
            <div className={classes.GameOver}>

            <p>{result}</p>
                <h5>Word you were looking for is {props.word} </h5>
            <p><button onClick={props.onClickReset}>Reset</button></p></div>
        )
    }
export default GameOver;