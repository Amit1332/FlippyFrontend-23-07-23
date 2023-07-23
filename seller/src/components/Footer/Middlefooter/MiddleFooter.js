import { useState } from 'react'

import Aboutflippy from './Aboutflippy'
import React from 'react'

export default function MiddleFooter() {
    const [style,setstyle] = useState({height :"0px",overflow:"hidden"}); 
    const [i,seti] = useState(true);  
    const changestyle = ()=>{
        if(i){
            setstyle({
                height:"initial",
                overflow: "hidden"
            });
            seti(false);
        }else{
            setstyle({
                height:"0px",
                overflow: "hidden"
            });
            seti(true);
        }
    }
    return (
    <div className="Moreflippy">
        <div className="head" onClick={changestyle}>
            <h3>More About Flippy 7</h3>
            <i class="las la-angle-down"></i>
        </div>
        <div className="dropdown" style={style}>
            <Aboutflippy/>
        </div>
    </div>
  )
}
