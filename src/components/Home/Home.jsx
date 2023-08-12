import React from "react";
import { compmonents } from "../../componets";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="componets-container">
        {compmonents.map((data) => {
          return (

              <div key={data.id} className="components">{data.comp}</div>

          );
        })}
      </div>
    </div>
  );
}

export default Home;
