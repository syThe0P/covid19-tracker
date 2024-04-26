import Chart from "chart.js/auto";
import React from "react";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Charts.css";

Chart.register(CategoryScale);

function PieChart({ chartData }) {
  const data = {
    labels: ["Confirmed Cases", "Active","Recovered", "Deaths"],
    datasets: [
      {
        label: "COVID-19 Cases",
        data: [
          chartData?.total,
          chartData?.active,
          chartData?.recovered,
          chartData?.deaths
        ],
        backgroundColor: ["#EC7A08", "#23511E", "#004B95","#C9190B"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Pie
        data={data}
        options={{
          plugins: {},
        }}
        height={200}
        width={200}
      />
    </div>
  );
}

export default PieChart;
