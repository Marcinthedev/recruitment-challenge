import React from 'react'
import classes from './Letters.css'
const Letters = (props)=> {
    const letters = [...props.letters];
    console.log(`wynik + ${letters}`);
    console.log(typeof  letters);
    const lettersMapped = letters.map((element) => (
    element.isFound===true ?
        <div key={element.index} className={classes.letter}>{element.val}</div>
        :
        <div key={element.index} className={classes.letter}> </div>
    ));
    return (
        <div className={classes.letters}>{lettersMapped}</div>
    )
}
export default Letters;