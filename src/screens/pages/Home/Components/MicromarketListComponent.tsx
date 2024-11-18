import React from "react";
import { Micromarketdetail } from "../../../../JSON/GetTrendingList_v2Model";
function MicromarketListComponent(props: any) {
  const handleClick = (value: any) => {
    // alert(`Clicked on ${value}`);
    props.fromChild(`${value}`);
  };

  const createList = () => {
    return props.toChild?.map((data: Micromarketdetail, index: any) => (
      <div style={{ backgroundColor: "#222428", flexFlow:"row", display:"flex"}} key={index}>
        <div style={{flex:"50%",marginLeft:10}}>
          <p style={{ color: "#FFFFFF", textAlign:"start" }}>{data.MicroMarket}</p>
          <p style={{ color: "#FFFFFF",textAlign:"start" }}>{data.AverageRent}</p>
        </div>
        <div style={{flex:"50%",marginRight:10}}>
          <p style={{ color: "#FFFFFF" ,textAlign:"end"}}>{data.Trend}</p>
          <div style={{ textAlign:"end"}}>
          <button style={{textAlign:"end",alignItems:"end",justifyContent:"end"}} onClick={() => handleClick(data.MicroMarket)}>Bid</button>
          </div>
        </div>
      </div>
    ));
  };

  return <div>{createList()}</div>;
}

export default MicromarketListComponent;
