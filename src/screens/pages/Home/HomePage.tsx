import React, { useEffect, useState } from "react";

import GetTrendingList_v2 from "../../../JSON/GetTrendingList_v2.json";
import { CityDetail, GetTrendingList_v2Output, MicroMarketDetail, } from "../../../JSON/GetTrendingList_v2Model";
import BannerComponent from "./components/BannerComponent";

import MicromarketListComponent from "./components/MicromarketListComponent";
import SearchbarComponent from "./components/SearchbarComponent";
import { useNavigate } from "react-router-dom";
import CityListingComponent from "./components/CityListingComponent";


function HomePage() {
  var [microMarketDetail, setMicroMarketDetail] =
    useState<MicroMarketDetail[]>();

  var [cityDetails, setCityDetails] = useState<CityDetail[]>()

  const navigate = useNavigate();

  const loadData = () => {
    const response: GetTrendingList_v2Output = GetTrendingList_v2;
    // var value: Micromarketdetail[]  = response.Data.micromarketdetails.filter(x=>{
    //   x.City="Bangalore"
    // })
    setMicroMarketDetail(response.Data.micromarketdetails);
  };

  const moveToBidScreen = (area: String) => {
    console.log(`selected are is:${area}`);
    let data = { location: area, id: 1234 }
    // const query = new URLSearchParams(`location=${area}&id=123`)
    // console.log(`location=${area}&id=123`)
    // console.log(`${JSON.stringify(data).replace(",", "&").replace(":", "=").replace("{", "").replace("}", "").replaceAll(`"`, ``)}`)
    // const query = new URLSearchParams(`${JSON.stringify(data).replaceAll(",", "&").replaceAll(":", "=").replaceAll("{", "").replaceAll("}", "").replaceAll(`"`, ``)}`)
    
    const urlParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      urlParams.append(key, value.toString());
    });
    

    navigate(`/bidsummary?${urlParams}`);
  };

  const moveToProeprtySearchpage = () => {
    console.log("move to proeprty search page")
    navigate("/propertySearch");
  }


  useEffect(() => {
    loadData();

  }, []);

  return (
    <div style={{ backgroundColor: "#222428" }}>
      <BannerComponent />
      <SearchbarComponent
        goToSearchPage={moveToProeprtySearchpage}
      />

      <MicromarketListComponent
        microMarketData={microMarketDetail}
        showBidScreen={moveToBidScreen}
      />

    </div>
  );
}

export default HomePage;
