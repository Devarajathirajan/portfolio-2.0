import React from "react";
import "./Home.css";

export const Home = () => {
  const scrollBottom = () => {
    const nextPosition = window.innerHeight;
    console.log(nextPosition);
    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="Home">
      <div className="home__container">
        <div className="home__paragraph">
          <h1>Hi, My name is</h1>
          <h3>DEVARAJATHIRAJAN S</h3>
          <p>Android App Developer{" < />"}</p>
          <button onClick={scrollBottom}>Know More</button>
        </div>
        <div className="home__img">
        </div>
      </div>
    </div>
  );
};
