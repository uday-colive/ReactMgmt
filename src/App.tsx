import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/pages/home/HomePage';
import PropertySearchPage from './screens/pages/propertySearch/PropertySearchPage';
import BiddingScreen from './screens/pages/biddingScreen/BiddingScreen';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route path="home" index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        {/* <Route path="/detail" element={<PageComponent />} /> */}
        <Route path="/propertySearch" element={<PropertySearchPage />}/>
        <Route path="/bidsummary" element={<BiddingScreen />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
