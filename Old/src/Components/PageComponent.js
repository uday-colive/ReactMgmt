import React from "react";
import { useLocation } from "react-router-dom";

function PageComponent(props) {
  const location = useLocation();

  return (
    <div>
      <p>PageComponent</p>
      <p>{location.state.name}</p>
    </div>
  );
}

export default PageComponent;
