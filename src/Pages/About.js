import React from "react";
import "../css/Pages.css";

function About() {
    
    return (
      //all html must be within a single html component aka <div> for this one.
      <div className="pages">
        <div className ="box1">
          <div className="intro">
            <h1> ABOUT </h1>
            <p> Hi there! My name is Shinho Jung. I am currently a graduate student at the University of Washington in Seattle, WA, majoring in Electrical Engineering and Data Science. Why? Because I love all things engineering and TECH! </p>
            <p>From a young age, I have always been fastinated how things works. At school, physics and math were always my favorite subjects, especially when our projects involved breaking things apart. To this day, I am constantly amazed by today's ingenuity and creativity of modern engineering. That is why I have pursued the field of engineering, seeking to bringing solutions our hardest problems in order to make the world a better place.
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
            <p> Currently, at UW-Seattle, I am focused is on power and distribution systems with emphasis on data science and machine learning. I believe our current electrical distribution grid holds many inefficiencies surrounding power consumption, which can be optimized through better power system designs and software programming. This can have significant impact in lowering overall electrical waste that impacts our environment as well as reducing your electrical billtoo!</p>
            <p> Other academic intersts include the integration of artificial intelligence and machine learning in our daily lives. Several side projects that I am working includes an home renovation cost estimator, a investment portfolio management program, and market trend predictor. (See projects section above!) </p>
          </div>
        </div>
        <div className="box3">
          <div className="pt">
            <p> Other Interests: I am also an avid fitness enthusiast. To this date, I ran two full marathons (so far!) and completed one 70.3 mi Half-Ironman distance triathlon. I have also competed in local olympic weightlifting competitions near New Orleans because lifting heavy weights and putting it down is always a great exercise! On my other free time, I love to work on building my own furniture and doing home improvement projects. If you're curious, many of my furniture projects are under American mid-modern century style influence with East Asian feel! </p>
            <p> Thanks for taking the time to read my short bio! For more information about me, check out my other tabs on my website! As always, feel free contact me if you want to connect via email or LinkedIn!
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