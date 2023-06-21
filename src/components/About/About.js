import React from "react";
import "./About.css";
import Image from "../../assets/image1.jpeg";

export const About = () => {
  return (
    <div className="About">
      <div className="about__container">
        <div className="about__img">
          <img src={Image} alt="" />
        </div>
        <div className="about__paragraph">
          <h1>About ME</h1>
          <div>
            Hi! I am <span>Devarajathirajan S</span>. I am a Native Andorid Developer using Kotlin.
            I am good at both XML views and Jetpack compose toolkit.  I have good knowledge in modern
            concepts used like MVVM pattern, app architecture. I have good understanding on REST API integration,
            Firebase services, JetpackCompose, Web sockets, Clean Architecture, Kotlin Coroutines etc...
          </div>
          <a
            href="https://drive.google.com/file/d/1ulF2ilqfCa-vPCCN-I7Y3mXzW7-V-X9E/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
