import React from "react";
import Header from "./Header";
import "./casestudy2.css";
import eventifyImage from "./assets/eventify-app-design.png";
function CaseStudy2() {
  return (
    <div>
      <div className="container1">
        <div className="first-text">Featured Project</div>
        <div className="eventify">
          <b>EVENTIFY APP DESIGN</b>
        </div>
        <div className="main-text">
          <img src={eventifyImage} alt="image" className="image1"></img>
          <div className="main-text1">Discover, Connect, Attend. </div>
          <div className="main-text2">Effortlessly explore and engage</div>
          <div>with local events.</div>

          <div className="labels">
            <p className="label1">Visual Design</p>
            <p className="label2">UX/UI</p>
            <p className="label3">Product Design</p>
          </div>
        </div>
        <div className="time">
          <span>8 min read</span>
        </div>
        <div className="details">
        <div className="timeline">
          <span className="text1">TIMELINE</span>
          <p className="text2">Dec-Jan 2023(2weeks)</p>
        </div>
        <div className="sector">
          <span className="text1">SECTOR</span>
          <p className="text2">Entertainment, Social Networking</p>
        </div>
        </div>
        <div className="design-role">
          <span className="role">Design thinking , UX/UI , Problem Solving</span>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy2;
