import React from "react";
import deco_wave from "../assets/svg/wave.svg";
import about_json from "../data/about.json";
import "../assets/css/AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <img src={deco_wave}></img>
        <h2>About Us</h2>

        <div className="about-us-main">
          {
        about_json.data.map((item, index) => {
          return (
            <div>
              <h3><span>{`0${index+1}. `}</span>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          )
        })
        }
        </div>
      </div>
    </>
  );
};

export default AboutUs;