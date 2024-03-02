import React from "react";
import Header from "./Header";
import "./casestudy2.css";
import eventifyImage from "./assets/eventify-app-design.png";
import ellipse from "./assets/Ellipse.png";
import mobile from "./assets/mobile-images.png";
import singleMobile from "./assets/single-mobile.png";
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
          <div className="main-text1">
            Discover, Connect, Attend. Effortlessly explore and engage with
            local events.
          </div>
          {/* <div className="main-text2">Effortlessly explore and engage</div>
          <div>with local events.</div> */}

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
          <span className="role">
            Design thinking , UX/UI , Problem Solving
          </span>
        </div>
      </div>

      <div className="container2">
        <div className="intro">
          <b>Introduction</b>
        </div>

        <div className="text3">
          <span>
            This project was done as part of my challenge where we were prompted
            design a user interface for a fictional mobile application called
            "Eventify." Eventify is a social event planning app that allows
            users to create, discover, and join events in their local community.
          </span>
        </div>

        <div className="ultimate">
          <span>
            Your Ultimate Event Companion! Discover and connect with local
            events effortlessly.
          </span>
        </div>

        <div className="text3">
          <span>
            Your all-in-one solution for event discovery, planning, and
            connection. Discover exciting events tailored to your interests,
            connect with like-minded individuals, and create unforgettable
            experiences.
          </span>
        </div>
      </div>

      <div className="container3">
        <div className="lists">
          <b>
            <img src={ellipse}></img> Problem Statements
          </b>
        </div>

        <div className="text4">
          <b>
            "Ever felt like there's always something exciting happening nearby,
            but you're just not sure how to find it?
          </b>
        </div>

        <div className="text5">
          <span>
            Whether it's missing out on cool concerts, fun meetups, or local
            workshops, many of us struggle to discover and connect with the
            events that truly spark our interest. Existing event apps often feel
            impersonal, leaving us lost in a sea of options without any real
            sense of community. That's where Eventify comes in! We're here to
            change the game by creating a friendly, intuitive platform that
            makes event discovery a breeze.
          </span>
        </div>
        <div className="text6">
          <span>
            Our goal is to bring people together, help you find events you'll
            love, and make it easy to connect with others who share your
            passions. Say goodbye to FOMO and hello to a world of endless
            possibilities with Eventify!"
          </span>
        </div>
      </div>

      <div className="container4">
        <div className="lists">
          <b>
            <img src={ellipse}></img> Solutions
          </b>
        </div>
        {/* <div className="layers1">
          <img src={singleMobile} alt="image" className="image2"></img>
        </div> */}
        <div className="text7">
          <b>
            Make reaching people easily and quick within your range engage with
            local events tailored to your interests with
          </b>
        </div>

        <div className="text8">
          <b>What is Eventify aiming to do?</b>
        </div>

        <div className="text9">
          <span>
            Eventify aims to revolutionize the way
            <b className="boldit"> people discover, connect, and engage</b> with
            events in their local communities.Eventify strives to facilitate
            seamless connections between event organizers and attendees, foster
            community engagement, and create memorable experiences for users.
          </span>
        </div>
      </div>

      {/* <div className="container5">
        <div className="layers2">
          <img src={mobile} className="image3" />
        </div>
      </div> */}
    </div>
  );
}

export default CaseStudy2;
