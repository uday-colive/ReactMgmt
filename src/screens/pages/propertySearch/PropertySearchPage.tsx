import React from 'react'
import ProeprtySearchPageHeader from './components/ProeprtySearchPageHeader'
import { useNavigate } from 'react-router-dom';
import PropertySearchBar from './components/PropertySearchbar';


function PropertySearchPage() {

  const navigate = useNavigate();

 const moveBackToHomePage = ()=>{
  console.log("go back to home from proeprty search page")
  navigate(-1)
  }

  return (
    <div style={{backgroundColor:"#222428"}}>
      <ProeprtySearchPageHeader
      backToHome = {moveBackToHomePage}
      />
      <PropertySearchBar/>
    </div>
  )
}

export default PropertySearchPage
