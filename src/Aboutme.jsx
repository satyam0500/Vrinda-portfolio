import React from "react";
import Header from "./Header";
import ProfilePhoto from "./assets/profilephoto.png";
import "./aboutme.css";

const hola = ["H", "☻", "l","a"];

function Aboutme() {
  return (
    <>
      <Header />
      <div className="aboutme-container">
        <div className="row">
          <div className="text-content">
          <h1 className="heading-hola">
            {hola.map((letter, index) => (
              <span
                className="drop-letter"
                style={{ animationDelay: `${index * 0.5}s` }}
                key={index}
              >
                {letter}
              </span>
            ))}
          </h1>
            <p className="texts">My name is Vrinda. I'm an Interaction Design student </p>
            <p className="texts">
              My passion for design emerged as the world turned digital. I began
              with graphic designing and I find myself crafting experiences that
              strengthens connection and creates a sense of community for
              others. Since then, I have shifted my career focus to UX design.
            </p>
            <p className="texts">
              Designing for inclusivity, equitability, and universal
              accessibility are my core values when it comes to designing
              positive experiences with people in mind.
            </p>
          </div>
        </div>
        <div className="content">
        <div className="hobbies">
        <img src={ProfilePhoto} alt="Profile Photo" className="profile-photo" />
          <h2 className="texts">Besides designing you can find me ⬇️</h2>
          <div>
            <p className="find-me">👋 writing notes to myself</p>
            <p className="find-me">☕ having coffee hours</p>
            <p className="find-me">🍄 cooking food</p>
            <p className="find-me">🌈 watching anime</p>
            <p className="find-me">🎨 drawing in my sketchbook</p>
            <p className="find-me">🪴 probably collecting way too many notebooks</p>
            <p className="find-me">✨ eating ramen </p>
          </div>
        </div>
        <div className="contact">
          <h2 className="texts">Wanna know me in person</h2>
          <div>
            <p className="find-me">email</p>
            <p className="find-me">Linkedin</p>
            <p className="find-me">9999999999</p>
          </div>
        </div>
        <div className="note">
          <h2 className="footer">Made with lots of love and caffeine</h2>
          <div className="images"></div>
        </div>
            
          </div>
        {/* <div className="hobbies">
          <h2>Besides designing you can find me ⬇️</h2>
          <ul>
            <p>👋 writing notes to myself</p>
            <p>☕ having coffee hours</p>
            <p>🍄 cooking food</p>
            <p>🌈 watching anime</p>
            <p>🎨 drawing in my sketchbook</p>
            <p>🪴 probably collecting way too many notebooks</p>
            <p>✨ eating ramen </p>
          </ul>
        </div> */}
        {/* <div className="contact">
          <h2>Wanna know me in person</h2>
          <ul>
            <p>email</p>
            <p>Linkedin</p>
            <p>9999999999</p>
          </ul>
        </div>
        <div className="note">
          <h2>Made with lots of love and caffeine</h2>
          <div className="images"></div>
        </div> */}
      </div>
    </>
  );
}

export default Aboutme;
