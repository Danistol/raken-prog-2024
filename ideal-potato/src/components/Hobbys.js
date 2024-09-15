import React from "react";
import "../App.css";

const Hobby = () => {
  const hobbies = ["arvutimängud", "korvpall", "lugemine", "programmeerimine"];

  return (
    <div className="container">
      <div className="hobbies">
        <h2>Minu Huvid</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hobby;
