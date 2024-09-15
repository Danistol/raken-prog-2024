import React from "react";
import "../App.css";

const Email = () => {
  return (
    <div className="container">
      <div className="email">
        <h2>Kontaktivorm</h2>
        <form>
          <label htmlFor="email">Teie e-mail:</label>
          <input type="email" id="email" name="email" required></input>

          <label htmlFor="message">Teie sõnum</label>
          <textarea id="message" name="message"></textarea>
        </form>
      </div>
    </div>
  );
};
export default Email;
