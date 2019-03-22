import React from 'react'
import classes from './Layout.css'
import Hochelper from '../hochelper/Hochelper'
const Layout=(props) =>(

        <Hochelper>
        <div className={classes.GameBackgroundInsideblock}>
            {props.children}
        </div>
        </Hochelper>

);
export default Layout;