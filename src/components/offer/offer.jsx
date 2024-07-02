import React from "react";
import './offer.css'
import Offerlist
 from "./offer";
const Offer =() => {
    return (
        <>
<div className="bigoffercon"> 
           <h3>What We Offer</h3>

    {
        Offerlist.map((value,index)=>{
            return(
                <div className="offerd" key={index}>
                    <div className="word">
                    <h3>{value.title}</h3>
                     <p>{value.description}</p>
                    </div>
                    <div className="img">
                        <img src={value.img} alt="" />

                    </div>
                </div>
            )
        })
    }

    <div className="cont">
        <p>contact now</p>
        <box-icon color="white" size="40px" name='down-arrow-circle' type='solid' ></box-icon>

    </div>
</div>
        </>
    )
}
export default Offer