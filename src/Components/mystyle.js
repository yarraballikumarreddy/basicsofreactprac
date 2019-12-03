import React, { Component } from 'react';
import './style.css';
import styles from './style.module.css'
// inline css
const heading = {
    fontSize: '72px',
    color: 'red'
}
function MyStyle() {
    return ( //for multiply classnames and outside css
        <div> <h1 className={`primary font-xl`}>
            hello yarra
              balli kumar reddy</h1>
              <h1 className={styles.sucess}>  from style module.css</h1>
            
              <h1 style={heading}> inline </h1> 
        </div>


    )
}
export default MyStyle;