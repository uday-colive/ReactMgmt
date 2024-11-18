import React from 'react'
import backArrow from "../../../../assets/images/back_arrow_icon.png"
function ProeprtySearchPageHeader(props:any) {
  return (
    <div style={{backgroundColor:"#222428", width:"100%", height:50, flexFlow:"row", display:"flex",alignItems:"center"}}>

      <img src={backArrow} onClick={()=>{props.backToHome()}} style={{width:30, height:30,marginRight:15, marginLeft:15}}/>
      <p style={{color:"#FFFFFF", fontSize:22, fontWeight:"bold", marginRight:10}}>
      Proeprty
      </p>
      <p style={{color:"#ed0c70",fontSize:22, fontWeight:"bold",}}>
      Discovery
      </p>
    </div>
  )
}

export default ProeprtySearchPageHeader
