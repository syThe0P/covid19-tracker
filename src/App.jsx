import "./App.css";
import LineCharts from "./Charts/LineCharts";
import PieChart from "./Charts/PieChart";
import InfoBox from "./InfoBox/InfoBox";
import Map from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import Table from "./Table/Table";
import React, { useState, useEffect } from "react";

function App() {
  const [tableData, setTableData] = useState({});
  const [pieChartData, setPieChartData] = useState({});


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      const jsonData = await response.json();
      setTableData(jsonData.data);
      setPieChartData(jsonData.data["unofficial-summary"][0]);
      console.log(jsonData.data["unofficial-summary"][0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log(pieChartData);
  }, [pieChartData]);

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="app_left">
          <div className="app-left_top">
            <div className="chart-container">
              <PieChart chartData={pieChartData} />
              <LineCharts />
            </div>
          </div>
          <div className="app-left_bottom">
            <div className="table">
              <div>
                {Object.keys(tableData).length > 0 ? (
                  <Table data={tableData} />
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
                value={tableData.summary ? tableData.summary.total : "-"}
                color="#ffc0cb"
                textColor="Red"
              />
              <InfoBox
                title="Active"
                value={
                  tableData["unofficial-summary"] &&
                  tableData["unofficial-summary"].length > 0
                    ? tableData["unofficial-summary"][0].active
                    : "-"
                }
                color="#dbf0fd"
                textColor="Blue"
              />
              <InfoBox
                title="Recovered"
                value={
                  tableData["unofficial-summary"] &&
                  tableData["unofficial-summary"].length > 0
                    ? tableData["unofficial-summary"][0].recovered
                    : "-"
                }
                color="#ddffdd"
                textColor="Green"
              />
              <InfoBox
                title="Deaths"
                value={tableData.summary ? tableData.summary.deaths : "-"}
                color="gray"
                textColor="Black"
              />
            </div>
          </div>
          <div className="app-right_bottom">
            <Map data={tableData.regional} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
