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
            <p><button onClick={props.onClickReset}>Reset</button></p></div>
        )
    }
export default GameOver;