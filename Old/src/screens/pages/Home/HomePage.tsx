import React, { useEffect, useState } from "react";
import BannerComponent from "./Components/BannerComponent";
import SearchbarComponent from "./Components/SearchbarComponent";
import MicromarketListComponent from "./Components/MicromarketListComponent";
import GetTrendingList_v2 from "../../../JSON/GetTrendingList_v2.json";
import {GetTrendingList_v2Output} from "../../../JSON/GetTrendingList_v2Model";
import { Container } from "react-dom";
function HomePage() {
  
  var [GetTrendingListResponse, SetGetTrendingListResponse] = useState<GetTrendingList_v2Output>();

  const loadData = () => {
    const response:GetTrendingList_v2Output = GetTrendingList_v2; 
    
    SetGetTrendingListResponse(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <p>number of micro markets </p>
      <BannerComponent />
      <SearchbarComponent />
      <MicromarketListComponent microdata={GetTrendingListResponse?.Data.micromarketdetails} />
    </div>
     
  )
}

export default HomePage;
