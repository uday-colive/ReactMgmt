import React from "react";

function MicromarketListComponent(props) {
  const handleClick = (value) => {
    alert(`Clicked on ${value}`);
  };
  const createList = () => {
    return props.microdata.map((data, index) => <p>{data.MicroMarket}</p>);
  };

  return (
    <div>
      <p>{createList()}</p>
    </div>
  );
}

export default MicromarketListComponent;
