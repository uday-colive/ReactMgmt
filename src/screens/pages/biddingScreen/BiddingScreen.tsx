import React from 'react'
import BiddingScreenHeader from './components/BiddingScreenHeader'
import { useNavigate, useSearchParams } from 'react-router-dom';

function BiddingScreen(props:any) {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

    const location = searchParams.get('location');
    const id = searchParams.get('id');

  const moveBackToHomePage = ()=>{
   console.log("go back to home from proeprty search page")
   navigate(-1)
   }

  return (
    <div>
      <BiddingScreenHeader
       backToHome = {moveBackToHomePage}
       location = {location}
       id = {id}
      />
      
    </div>
  )
}

export default BiddingScreen
