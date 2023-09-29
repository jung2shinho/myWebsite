import React from "react";
import "../css/Pages.css";
import { Link } from "react-router-dom";

function About() {
    const path = process.env.PUBLIC_URL
    return (
      //all html must be within a single html component aka <div> for this one.
      <div className="pages">
        <div className ="box1">
          <div className="intro">
            <h1> ABOUT </h1>
            <p> Hi there! My name is Shinho Jung. I am currently a graduate student at the University of Washington in Seattle, WA, majoring in Electrical Engineering and Data Science. Why? Because I love all things engineering and TECH! </p>
            <p>From a young age, I have always been fastinated how things works. At school, physics and math were always my favorite subjects, especially when our projects involved breaking things apart. I am constantly amazed by the ingenuity and creativity of today's inventions. That is why I have pursued the field of engineering, seeking to bring solutions to our hardest problems and contribute to our human progress.
            </p>
          </div>
          <div className="images">
            <a href="https://www.instagram.com/jungehof/"><img src={path + "/images/portrait.png"} alt="portrait" id="portrait" />
            </a>
          </div>
        </div>

        <div className="box2">
          <div className="images">
            <img src={path + "/images/grad.png"} alt="grad" id="grad"/>
          </div>
          <div>
            <p> Currently, at UW-Seattle, I am focused on data science and machine learning with applications towards power systems. I believe our current electrical distribution grid holds many inefficiencies surrounding power consumption, which can be optimized through better algorithms as well as power system designs. If solved, this can have a significant impact in lowering our overal electrical consumption while improving the environment and reducing your electrical bill too!</p>
            <p> My other academic intersts include human behavior in the stock markets, the effects of smart home integration (i.e Internet of Things (IoT)), and AI singularlity. Several side projects that I am working includes an home renovation cost estimator, a investment portfolio management program, and market trend predictor. (See <Link to="/Projects"> projects</Link> section!) </p>
          </div>
        </div>
        <div className="box3">
          <div>
            <p> Other Interests: I am also an avid fitness enthusiast. To this date, I ran two full marathons (so far!) and completed one 70.3 mi Half-Ironman distance triathlon. I have also competed in local olympic weightlifting competitions near New Orleans because lifting heavy weights and putting it down is always a great exercise! On my other free time, I love to work on building my own furniture and doing home improvement projects. If you're curious, many of my furniture projects are under American mid-modern century style influence with East Asian feel! </p>
            <p> Thanks for taking the time to read my short bio! For more information about me, check out my other tabs on my website! As always, feel free contact me if you want to connect via email or LinkedIn!
            </p>
          </div>
          <div className="images">
            <img src={path + "/images/ironman.png"} alt="ironman" id="ironman"/>
          </div>
        </div>
      </div>
    );
};

export default About;