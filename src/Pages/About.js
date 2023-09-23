import React from "react";
import "../css/Pages.css";

function About() {
    
    return (
      //all html must be within a single html component aka <div> for this one.
      <div className="pages">
        <div className ="box1">
          <div className="intro">
            <h1> ABOUT </h1>
            <p> Hi there! My name is Shinho Jung. I am currently a graduate student at the University of Washington in Seattle, WA, majoring in Electrical Engineering and Data Science because I love all things TECH! From a young age, I have always been so fastinated by the complexity and ingenuity of our daily machines, and the world's ability to create and implement innovative solutions for society's problems. For me, I have always made it my mission to enhance the ever-evolving landscape of technology, thanks to my incessant curosity and drive for problem-solving.
            </p>
          </div>
          <div className="images">
            <a href="https://www.instagram.com/jshinhoxp/?hl=en"><img src={"/images/profPortrait.png"} alt="pt" id="portrait" />
            </a>
          </div>
        </div>

        <div className="box2">
          <div className="images">
            <img src={"/images/grad.png"} alt="grad" id="grad"/>
          </div>
          <div className="blah">
            <p> My main academic focus at UW-Seattle is on power and distribution systems with emphasis on data science and machine learning. I believe our current electrical distribution grid holds many inefficiencies surrounding power consumption, which can be mitigated through better power system designs and software programming. This can have significant impact in lowering overall electrical waste and your electrical bill!</p>
            <p> Other academic intersts include pratical applications of artificial intelligence and machine learning in our daily lives.Several side projects that I am working includes an home renovation cost estimator, a investment portfolio management program, and market trend predictor.</p>
          </div>
        </div>
        <div className="box3">
          
          <div className="pt">
            <p>Lastly, I am also an avid fitness enthusiast. I ran two full marathons (so far!) and completed a 70.3 mi Half-Ironman distance triathlon. I have also competed in local olympic weightlifting competitions near New Orleans just for the fun of it. I also love working on furniture and home improvement projects, as long as my wife is ok with it. Many of my furnitures are with a mid-modern century style with a Scandinavian-Korean feel! </p>
            <p> Thanks for taking the time to read my short bio! For more information about me, check out my other tabs on my website!
            </p>
          </div>
          <div className="images">
            <img src={"/images/Ironman.png"} alt="ironman" id="ironman"/>
          </div>
        </div>
      </div>
    );
};

export default About;