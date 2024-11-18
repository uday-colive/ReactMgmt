import React, { useEffect, useState } from "react";
import BannerComponent from "./Components/BannerComponent";
import SearchbarComponent from "./Components/SearchbarComponent";
import MicromarketListComponent from "./Components/MicromarketListComponent";
import GetTrendingList_v2 from "../../../JSON/GetTrendingList_v2.json";
import { GetTrendingList_v2Output, Micromarketdetail } from "../../../JSON/GetTrendingList_v2Model";
 
function HomePage() {
  var [GetTrendingListResponse, SetGetTrendingListResponse] =
    useState<Micromarketdetail[]>();

  const loadData = () => {
    const response: GetTrendingList_v2Output = GetTrendingList_v2;
    // var value: Micromarketdetail[]  = response.Data.micromarketdetails.filter(x=>{
    //   x.City="Bangalore"
    // })
    SetGetTrendingListResponse(response.Data.micromarketdetails);
  };

  const getSelectArea = (area: String) => {
    console.log(`selected are is:${area}`);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div> 
      <BannerComponent />
      <SearchbarComponent />
      <MicromarketListComponent
        toChild={GetTrendingListResponse}
        fromChild={getSelectArea}
      />
    </div>
  );
}

export default HomePage;
