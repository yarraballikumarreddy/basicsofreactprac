import React, { Component } from 'react';
// import RefCom from './ref/ref'
// import Callbackref from './ref/Callbackref'
// import Hero from './ErrorBoundary/ErrorBound';
// import Errorcodebound from './ErrorBoundary/Errorcodebound'
 import Hoverincrem from './higherorder/hover'
 import Countincrem from './higherorder/countincrem'

 import ClickCounter from './higherorder/githubhHOC/ClickCounter'
 import HoverCounter from './higherorder/githubhHOC/HoverCounter'
import Counteragestop from './tegsith/counteragestop'
import GParent from './parenttochild/ptoc/gardenparent'
import iGParent from './increment/inc'

class AppAll extends Component {
    render() {
        return (
            <div>
                {/* <RefCom></RefCom>
                <Callbackref></Callbackref>
                <br></br>
                {/* <Errorcodebound>
                    <Hero heroname="kumarreddy"></Hero>
                    <Hero heroname="pavanreddy"></Hero>
                    <Hero heroname="joker"></Hero>
                </Errorcodebound> */}

                {/* or */}
                {/* <Errorcodebound>
                    <Hero heroname="kumarreddy"></Hero>
                </Errorcodebound>
                <Errorcodebound>
                    <Hero heroname="pavanreddy"></Hero>
                </Errorcodebound>
                <Errorcodebound>
                    <Hero heroname="j"></Hero>
                </Errorcodebound> */}


 {/* <Hoverincrem></Hoverincrem>
<Countincrem></Countincrem>
<ClickCounter ></ClickCounter>
<HoverCounter></HoverCounter> 
<Counteragestop></Counteragestop>*/}
                <GParent></GParent>
                {/* <iGParent></iGParent>  */}
               
            </div>
        );
    }
}

export default AppAll;