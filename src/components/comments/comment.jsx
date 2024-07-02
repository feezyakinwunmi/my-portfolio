import React from "react";
import commentlist from "./comment";
import './comment.css'
 const Comment = () =>{
    return(
        <>
<div className="comentbox">
    <h3>Comments</h3>
    {
        commentlist.map((value,index)=>{
            return(

                <div className="coment" key={index}>
                    <img src={value.pic} alt="" />
                    <h3>{value.name}</h3>
                    <p>{value.comment}</p>
                    <h4>{value.date}</h4>
                    <h4>{value.time}</h4>

                </div>
            )
        })
    }
</div>
        </>
    )
 }
 export default Comment;