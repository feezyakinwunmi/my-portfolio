import React from "react";
import './glowbox.css';

const Glowbox = () =>{
return(
    <>
      <div className="cube">
            <div className="top"></div>
            <div>
                <span style={{flexGrow: "--1:0;"}}></span>
                <span style={{flexGrow: "--1:2;"}}></span>
                <span style={{flexGrow: "--1:2;"}}></span>
                <span style={{flexGrow: "--1:3;"}}></span>

            </div>
        </div>
    </>
)
}
export default Glowbox