import React from "react";
import "./Projects.css";
import surveil from "../../assets/surveil_image.jpeg";
import covaimarket from "../../assets/covai_market.png";

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="project">
        <header>
          <h1>PROJECTS</h1>
        </header>
        <div className="projects__name">
          <header>Covai Market</header>
          <p>
          I worked in the development of Covai Market, an Android
          e-commerce app designed for buying and selling real
          estate properties and construction items. As a member
          of the team, I had the responsibility of handling both the
          frontend and backend development tasks. Working in
          collaboration with another team member, we
          successfully built and implemented the necessary
          functionalities for the app.
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://play.google.com/store/apps/details?id=com.crayosa.covaimarket"
              >
                see live
              </a>
            </div>
            <div className="projects__img">
              <img src={covaimarket} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="projects__name">
          <header>Surveil: G-Classroom like application</header>
          <p>
          Surveil is an Android application that allows user to
          create or join class rooms where admins post video
          lectures by providing YouTube links. Classroom
          members progress will be recorded and admin can
          check completion rate of every other members.
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__code"
                href="https://github.com/Devarajathirajan/surveil-mini-project"
              >
                source code
              </a>
            </div>
            <div className="projects__img">
              <img src={surveil} alt="" />
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};
