import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/pages/Home/HomePage';
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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
