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
            <p>Shin Ho Jung is a highly skilled and accomplished mechanical engineer with over 6 years of experience in the United States Navy. He holds a Bachelor of Science degree in Naval Architecture and Marine Engineering from the United States Naval Academy, and has also completed prerequisites in computer science at Everett Community College. He holds a professional engineering (PE) license for the state of Oregon and a Project Management Professional (PMP) certification. Additionally, he holds an active Department of Defense (DoD) Top Secret clearance.</p>
          
            <p> Shin Ho Jung has a wealth of experience in the Navy, having held various leadership positions in facilities engineering, construction management, and public works. He has a track record of success in resolving technical issues, developing and managing contracts, leading teams, and delivering critical infrastructure projects. He has a particular expertise in power distribution, HVAC, heating, optic fiber communications, and other critical infrastructure repairs. </p>

            <p>In addition to his technical skills, Shin Ho Jung is a highly skilled leader and manager. He has a proven ability to lead cross-functional teams and deliver results. He is a strategic thinker and an effective problem-solver. He is also an excellent communicator and has experience working with a wide range of stakeholders.</p>

            <p> Shin Ho Jung's skillset also includes proficiency in a wide range of software and programming languages such as AutoCAD, SolidWorks, Java, Python, Django, C#, C++, SQL, MS Excel VBA, HTML, CSS, and Javascript, as well as Cloud services such as Azure and Amazon. He is also fluent in both Korean and Russian languages. </p> 
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