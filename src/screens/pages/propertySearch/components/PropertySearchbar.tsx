import React from 'react'
import searchIcon from "../../../../assets/images/search_bar_icon.png"

function PropertySearchBar() {
  return <div style={{backgroundColor:"#222428", height:50, marginTop:20, paddingLeft:20, paddingRight:20}} >
    <div style={{backgroundColor:"#FFFFFF", margin:0, height:40, flexFlow:"row", display:"flex", alignItems:"center"}}>
    <img src={searchIcon} style={{width:30, height:30, marginRight:20, marginLeft:40}}/>
    <input placeholder='Search Location' style={{flex:1,border:"none",}}/>
    </div>
  </div>;
}

export default PropertySearchBar
