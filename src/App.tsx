import React from 'react';
import HomePage from './screens/pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <h1>Trending List App</h1>
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
};

export default App;