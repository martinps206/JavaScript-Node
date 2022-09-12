import React from "react";

const Header = ({ title }) => {
  return (
      <div id="Header" className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">
            This project shows the characters of the Rick & Morty series
          </p>
        </div>
      </div>
  );
};

export default Header;
