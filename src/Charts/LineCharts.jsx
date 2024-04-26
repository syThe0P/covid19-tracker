import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";

Chart.register(CategoryScale);

export default function LineCharts() {
  const [linechartData, setLineChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Active Cases",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const jsonData = await response.json();
      const lineDataState = jsonData.cases_time_series.slice(-7);

      const labels = lineDataState.map((entry) => entry.date);
      const dataPoints = lineDataState.map((entry) =>
        parseInt(entry.dailyconfirmed, 10)
      );

      setLineChartData({
        ...linechartData,
        labels: labels,
        datasets: [
          {
            ...linechartData.datasets[0],
            data: dataPoints,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
      <div className="line-chart">
        <Line
          data={linechartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Past 7 days Data",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
  );
}
