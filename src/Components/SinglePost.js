import React, { Component } from "react";
import "../css/SinglePost.css"


// when an event (e) happens, setstate() function executes
const handleCommentValue = (e) => {
   this.setState({
      commentValue: e.target.value,
   });
}


function SinglePost () {
   return(
      <div className="single-post">
         <div className="header">
            <h1> POST </h1>
            <div className="time-stamp" />
         </div>
         <div className="body" >
            <p> This is my body filled with content </p>
         </div>
         <div className="likes" />
         <div className="comments">
            <input className="input" value="comments" />
         </div>
      </div>
   )
}


export default SinglePost