import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./Components/TableComponent";
import ChartComponent from "./Components/ChartComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import PageComponent from "./Components/PageComponent";

function App() {
  return (
    // <div className="App">
    //   <TableComponent />
    //   <ChartComponent/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/detail" element={<PageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
