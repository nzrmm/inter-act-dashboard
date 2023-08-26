import cx from "classnames";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { dataProfit } from "@/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { intersect: false },
  },
  scales: {
    x: {
      grid: { color: "#151A2E", lineWidth: 3 },
      border: { width: 0, dash: [8, 8] },
      ticks: { display: false },
    },
    y: {
      display: false,
      ticks: {
        stepSize: 10,
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

export const data: ChartData<"line"> = {
  labels: dataProfit.values.map((item) => item.label),
  datasets: [
    {
      label: "Profit",
      data: dataProfit.values.map((item) => item.percentage),
      borderColor: "#0BB885",
      borderWidth: 3,
      pointRadius: (ctx) => {
        const pointsLength = ctx.chart.data.labels.length - 1;
        const pointsArray = [];

        for (let i = 0; i <= pointsLength; i++) {
          [pointsLength, 0].includes(i)
            ? pointsArray.push(8)
            : pointsArray.push(0);
        }

        return pointsArray;
      },
      pointHoverRadius: 10,
      pointBorderWidth: 6,
      pointHoverBorderWidth: 6,
      pointBackgroundColor: "#1C243F",
    },
  ],
};

const CardProfit = () => {
  return (
    <div className={cx("w-3/12 h-full bg-dark-04 rounded-md px-6 py-5")}>
      <div className={cx("mb-8")}>
        <p className={cx("font-medium mb-2")}>Profit</p>
        <p className={cx("font-medium text-3xl text-custom-green-01")}>
          {"8.24k"}
        </p>
      </div>

      <div>
        <Line height={80} options={options} data={data} />
      </div>
    </div>
  );
};

export default CardProfit;
