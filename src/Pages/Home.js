import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChartComponent from "../Components/ChartComponent";

function Home() {
  var [name, setName] = useState("Udaya");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleClick = () => {
    setName("Udayakumar");
    navigate("/detail", { state: { name: "sajja" } });
  };

  const createView = () => {
    let rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(
        <div>
          <a href="https://www.google.com">{name}</a>
          <button onClick={handleClick}>Click Me</button>
          {/* <Link
            to={{
              pathname: "/detail",
              state: { id: 1, name: "sabaoon", shirt: "green" },
            }}
          >
            Home
          </Link> */}
        </div>
      );
    }

    return rows;
  };

  return (
    <div>
      <ChartComponent />
      {createView()}
    </div>
  );
}

export default Home;
