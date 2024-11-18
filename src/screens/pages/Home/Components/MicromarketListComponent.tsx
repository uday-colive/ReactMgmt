import React from "react";
import { MicroMarketDetail } from "../../../../JSON/GetTrendingList_v2Model";
import rightArrow from "../../../../assets/images/right_arrow_icon.png";
import downArrow from "../../../../assets/images/down_arrow_icon.png"
import upArrow from "../../../../assets/images/up_arrow_icon.png"

function MicromarketListComponent(props: any) {
  const moveToBidScreen = (value: any) => {
    // alert(`Clicked on ${value}`);
    props.showBidScreen(`${value}`);
  };


  function formatToIndianCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0 // Removes decimals
    }).format(amount);
  }

  const createList = () => {
    return (
      <div style={{paddingTop:100}}>
        {
          props.microMarketData?.map((data: MicroMarketDetail, index: any) => (
            <div style={{ backgroundColor: "#222428", flexFlow: "row", display: "flex", paddingBottom:15, paddingTop:15 }} key={index}>
             
             {/* left Portion */}
              <div style={{ flex: "50%", marginLeft: 10 }}>
                <div style={{ flexFlow: "row", display: "flex", }}>
      
                  <p style={{ color: "#FFFFFF", textAlign: "start", margin:0, marginBottom:5 }}>{data.MicroMarket}</p>
      
                  <div style={{ alignContent: "center", marginLeft: 10 }}>
                    <img src={rightArrow} height={15} width={15}></img>
                  </div>
                </div>
      
                <p style={{ color: "#FFFFFF", textAlign: "start",margin:0  }}>{formatToIndianCurrency(data.AverageRent)}</p>
              </div>
      
              {/* right portion */}
              <div style={{ marginRight: 10, flexFlow: "row", display: "flex", alignItems: "center" }}>
      
                <p style={{ color: data.Trend > 0 ? "#00FF00" : "#FF0F00", textAlign: "end", }}>{`${data.Trend}%`}</p>
                <div style={{ alignContent: "center", marginLeft: 2 }}>
                  <img src={data.Trend > 0 ? upArrow : downArrow} style={{ marginRight: 15 }} height={20} width={20} ></img>
                </div>
                <div style={{ textAlign: "end" }}>
                  <button style={{ textAlign: "center", alignItems: "end", justifyContent: "end", backgroundColor: "#222428", color: "#FFFFFF", width: 40, height: 30 }} onClick={() => moveToBidScreen(data.MicroMarket)}>Bid</button>
                </div>
      
      
              </div>
            </div>
          ))
        }
      </div>
    )
  };

  return <div>{createList()}</div>;
}

export default MicromarketListComponent;
