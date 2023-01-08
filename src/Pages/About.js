import React from "react";
import "../css/Pages.css";

export default function About() {
    
    return (
      //all html must be within a single html component aka <div> for this one.
      <div className="pages">
        <div className ="box1">
          <div className="intro">
            <h1> ABOUT </h1>
            <p>Hi, my name is Sean Jung. I'm an active-duty US Naval Officer within the Civil Engineer Corps, currently deployed overseas in Romania. During my time in the Navy, I have lived in 8 different US states and spent time in 2 foreign </p> 
            <p>I graduated from the United States Naval Academy in Annapolis, MD (Class of 2015), where I studied Naval Architecture & Marine Engineering with a minor in the Russian Language. I am currently pursuing a Master's in Electrical Engineering at the University of Washington-Seattle.</p>
          </div>
          <div className="images">
            <a href="https://www.instagram.com/jshinhoxp/?hl=en"><img src={"/images/profPortrait.png"} alt="pt" id="portrait" />
            </a>
          </div>
        </div>

        <div className="box2">
          <div className="images">
            <img src={"/images/Ironman.png"} alt="ironman" id="ironman"/>
          </div>

          <div className="pt">
            <p>In my free time, I am avid fitness enthusiast. I have ran two, full 26.2 mi marathons and completed a 70.3 mi Half-Ironman distance ran. I have also competed in local olympic weightlifting competitions near New Orleans.</p>
          </div>
        </div>
        
        <div className="box3">
        <div className="blah">
            <p> blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p> 
            <p>Recently, I have spent a lot of time in machine learning and product design.</p>
            <p>Feel free to send me a message via email or LinkedIn.</p>
          </div>
          
          <div className="images">
          <img src={"/images/grad.png"} alt="grad" id="grad"/>
          </div>
          

          
        </div>
      </div>
    );
};