import React from 'react'
import searchIcon from "../../../../assets/images/search_bar_icon.png"


function SearchbarComponent(props:any) {
  return <div style={{position:"fixed", backgroundColor:"#222428",width:"100%", height:50, marginTop:50}} onClick={()=>{props.goToSearchPage()}}>
    <div style={{backgroundColor:"#FFFFFF", margin:10, height:40, flexFlow:"row", display:"flex", alignItems:"center"}}>
    <img src={searchIcon} style={{width:30, height:30, marginRight:20, marginLeft:40}}/>
    <p>
    Search By Location ...
    </p>
    </div>
  </div>;
}

export default SearchbarComponent
