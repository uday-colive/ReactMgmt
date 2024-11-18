import React, { useEffect, useState } from "react";

function TableComponent() {
  var [name, setName] = useState("Udaya");

  useEffect(() => {}, []);

  const handleClick = () => {
    setName("Udayakumar");
  };

  const createView = () => {
    return (
      <div>
        <a href="https://www.google.com">{name}</a>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  };

  return <div>{createView()}</div>;
}

export default TableComponent;
