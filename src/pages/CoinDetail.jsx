

import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CoinDetail = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const chartRef = useRef(null);

  const fetchChart = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=30`
      );

      const prices = data.prices;

      setChartData({
        labels: prices.map(p => new Date(p[0]).toLocaleDateString()),
        datasets: [
          {
            label: `${id.toUpperCase()} Price (${currency.toUpperCase()})`,
            data: prices.map(p => p[1]),
            borderColor: "rgb(34,197,94)",
            backgroundColor: "rgba(34,197,94,0.2)",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: "rgb(16,185,129)",
          },
        ],
      });
      setSelectedPoint(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChart();
    const interval = setInterval(fetchChart, 30000);
    return () => clearInterval(interval);
  }, [id, currency]);

  if (!chartData) return <p className="text-white">Loading Chart...</p>;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 16 }, color: "#ffffff" },
      },
      title: {
        display: true,
        text: `${id.toUpperCase()} Price Chart (30 Days)`,
        font: { size: 22 },
        color: "#ffffff",
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
      },
    },
    interaction: { mode: "nearest", axis: "x", intersect: false },
    scales: {
      x: {
        title: { display: true, text: "Date", font: { size: 16 }, color: "#ffffff" },
        ticks: { color: "#ffffff", font: { size: 14 } },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        title: { display: true, text: `Price (${currency.toUpperCase()})`, font: { size: 16 }, color: "#ffffff" },
        ticks: { color: "#ffffff", font: { size: 14 } },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

const handleChartClick = (event) => {
  const chart = chartRef.current;
  if (!chart) return;

  
  const points = chart.getElementsAtEventForMode(
    event,         
    'nearest',
    { intersect: false },
    true
  );

  if (points.length) {
    const firstPoint = points[0];
    const label = chart.data.labels[firstPoint.index];
    const value = chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
    setSelectedPoint({ label, value });
  }
};

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen p-6">
      
      <div className="mb-6">
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-4 rounded-lg shadow-lg flex justify-center">
        <Line ref={chartRef} data={chartData} options={options} onClick={handleChartClick} />
      </div>

      {selectedPoint && (
        <div className="mt-6 text-white bg-green-600 p-3 rounded-lg shadow-md font-semibold text-lg text-center">
          <div><strong>Date:</strong> {selectedPoint.label}</div>
          <div><strong>Price:</strong> {currency.toUpperCase()} {selectedPoint.value.toLocaleString()}</div>
        </div>
      )}
    </div>
  );
};

export default CoinDetail;
