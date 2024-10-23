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
            <p> Hi there! My name is Sean Jung. I am a recent graduate from the University of Washington in Seattle, WA, obtaining a M.S in Electrical Engineering with Data Science and AI focus. Why? Because I love all things engineering and TECH! </p>
            <p>From a young age, I have always been fastinated about how things work. Physics and math are my favorite subjects and continue to be, especially when projects involves breaking components apart. I am constantly amazed by the ingenuity and creativity of today's inventions. That is why I have pursued the field of engineering and software, helping to bring solutions to our hardest problems and continue to contribute to society.
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
            <p> Currently, at Google, I am involved in deploying GenAI for Enterprise (GENIE) platform for a public education client, enabling the use of customized LLMs with retrieval augmented generation (RAG) to create effective knowledge graphs for a personalized learning system. In the past, I've also worked on machine learning applications concerning utility infrastructure and power systems with NASA Jet Propulsion Laboratory, seeking to predict Coronal Mass Ejections and space weather and how it can affect our power grid systems. </p>
            <p> My other academic interests include psychology and financial markets, the impact of smart home integration (i.e Internet of Things (IoT)), and when the singularity will happen. Several projects includes my award-winning UW ENGINE Capstone project with NASA JPL, a semantic segmentation software for outlining aerial images, an automated investment portfolio management program, and a market trend predictor. (See <Link to="/Projects"> projects</Link> section!) </p>
          </div>
        </div>
        <div className="box3">
          <div>
            <p> Other Interests: I am also an avid fitness person. To this date, I ran three full marathons and completed one 70.3 mi Half-Ironman distance triathlon (so far!). I have also competed in local olympic weightlifting competitions near New Orleans because lifting heavy things and putting them down are always great for the soul! I also love to work on building my own furniture plus doing home improvement projects. If you're curious, you can check out my home furniture page here (TBD)! </p>
            <p> Thanks for taking the interest to read my short bio! For more information, check out my other tabs on my website! As always, feel free contact me via email, phone, or LinkedIn!
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