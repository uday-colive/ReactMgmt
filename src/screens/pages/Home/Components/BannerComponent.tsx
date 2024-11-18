import React from "react";
import notifictionIcon from "../../../../assets/images/notification_icon.png"
import userIcon from "../../../../assets/images/user_icon.png"

function BannerComponent() {
  return <div style={{position:"fixed", backgroundColor:"#222428",width:"100%", height:50, marginTop:0}}>
  <div style={{ margin:10, height:40, flexFlow:"row", display:"flex", alignItems:"center"}}>
  
  <p style={{color:"#FFFFFF",fontSize:26,fontWeight:"bold"}}>
  rent
  </p>
  <p style={{color:"#ed0c70", fontSize:26, fontWeight:"bold"}}>
  X
  </p>
  <div style={{flex:1}}>

  </div>
  <button style={{backgroundColor:"#222428", width:40, height:40, marginRight:10}}>
    <img src={userIcon} style={{width:20, height:20}}/>
  </button>
  <button style={{backgroundColor:"#222428", width:40, height:40,marginRight:10}}>
    <img src={notifictionIcon} style={{width:20, height:20}}/>
  </button>
  </div>
</div>;
}

export default BannerComponent;
