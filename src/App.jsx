import "./App.css";
import Charts from "./Charts/Charts";
import InfoBox from "./InfoBox/InfoBox";
import Map from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import Table from "./Table/Table";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="App">

      <div className="app_left">
        <div className="app-left_top">
          <Charts data={data}/>
        </div>
        <div className="app-left_bottom">
          <div className="table">
            <div>
              {Object.keys(data).length > 0 ? (
                <Table data={data} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="app_right">
        <div className="app-right_top">
          <div className="info_stats">
            <InfoBox
              title="Confirmed"
              value={data.summary ? data.summary.total : "-"}
              color="#ffc0cb"
              textColor="Red"
            />
            <InfoBox
              title="Active"
              value={
                data["unofficial-summary"] &&
                data["unofficial-summary"].length > 0
                  ? data["unofficial-summary"][0].active
                  : "-"
              }
              color="#dbf0fd"
              textColor="Blue"
            />
            <InfoBox
              title="Recovered"
              value={
                data["unofficial-summary"] &&
                data["unofficial-summary"].length > 0
                  ? data["unofficial-summary"][0].recovered
                  : "-"
              }
              color="#ddffdd"
              textColor="Green"
            />
            <InfoBox
              title="Deaths"
              value={data.summary ? data.summary.deaths : "-"}
              color="gray"
              textColor="Black"
            />
          </div>
        </div>
        <div className="app-right_bottom">
          <Map data={data.regional} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
