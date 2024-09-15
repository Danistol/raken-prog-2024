import React from "react";

const Name = (prop) => {
  return (
    <div>
      <h1>Tere, minu nimi on {prop.name}</h1>
    </div>
  );
};

const NameDisplay = () => {
  return (
    <div className="container">
      <div>
        <Name name="Daniil"></Name>
      </div>
    </div>
  );
};

export default NameDisplay;
