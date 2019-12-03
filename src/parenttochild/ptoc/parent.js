import React from 'react'

import Children from "./child";
 import Silbling from './Sibling';

 const Parent = (props) => (
     <div>
         {/* by using ...spread operator garentparent property will come children
         */}
         {/* <Children {...props}></Children>  */}
         <Children changetheworldevent ={props.changetheworld} title={props.title}></Children>

         <Silbling dowhathever ={props.changetheworld} title={props.title}></Silbling> 
     </div>
 );
 export default Parent;