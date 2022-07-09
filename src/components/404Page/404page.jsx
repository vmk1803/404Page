import React from "react";
import "./404page.css";

export const Page404 = () => {
  return (
    <div className="page-404-wrapper">
      <div className="left-side-image-container">
        <img src="/assets/Scarecrow.png" alt="404-error" />
      </div>
      <div className="feature-details">
        <h1 className="heading-404">I have bad news for you</h1>
        <p className="page-404-info">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button className="back-to-homepage-btn">Back to home page</button>
      </div>
    </div>
  );
};
