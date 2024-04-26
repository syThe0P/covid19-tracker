import React from "react";
import DonutChart from "react-donut-chart";
import './Charts.css'

const Charts = ({data}) => {
  return (
    <div className="chart-container">
      <div className="donut">
        <DonutChart
          data={[
            {
              label: "Confirmed",
              value: data["unofficial-summary"][0].total,
            
            },
            {
              label: "Active",
              value: data["unofficial-summary"][0].active,
            },
            {
              label: "Recovered",
              value: data["unofficial-summary"][0].recovered,
              
            },
            {
              label: "Deceased",
              value: data["unofficial-summary"][0].deaths,
             
            },
          ]}
          width={200}
          height={200}
        />
      </div>
      <div className="lineChart">
        
      </div>
    </div>
  );
};

export default Charts;
