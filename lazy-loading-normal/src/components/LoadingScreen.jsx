import React from "react";

export default function LoadingScreen({ message = "Loading component chunk..." }) {
  return (
    <div className="loading-screen-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{message}</p>
      <p className="loading-subtext">Dynamically importing module via React.lazy()...</p>
    </div>
  );
}
