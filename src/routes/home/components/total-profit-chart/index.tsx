import cx from "classnames";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Dot } from "@/components/commons";

import { dataTotalProfit } from "@/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { intersect: false },
  },
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#B9B9C3",
        font: {
          size: 10,
          family: "Inter",
        },
      },
    },
    y: {
      stacked: true,
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#B9B9C3",
        font: {
          size: 10,
          family: "Inter",
        },
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

const data: ChartData<"bar"> = {
  labels: dataTotalProfit.map((item) => item.label),
  datasets: [
    {
      label: "Earning",
      data: dataTotalProfit.map((item) => item.earning),
      backgroundColor: "#0BB885",
      barThickness: 8,
      borderRadius: 16,
    },
    {
      label: "Expense",
      data: dataTotalProfit.map((item) => item.expense),
      backgroundColor: "#FF9F43",
      barThickness: 8,
      borderRadius: 16,
    },
  ],
};

const TotalProfitChart = () => {
  return (
    <div className={cx("w-2/3 h-full bg-dark-04 rounded-s-md px-5 py-6")}>
      <div className={cx("flex justify-between items-center mb-9")}>
        <p className={cx("font-bold")}>Total Profit</p>

        <div className={cx("flex items-center gap-5")}>
          <div className={cx("flex items-center gap-2")}>
            <Dot customClassName={cx("w-2.5 h-2.5 bg-custom-green-01")} />
            <p className={cx("text-sm text-custom-gray-05")}>Earning</p>
          </div>

          <div className={cx("flex items-center gap-2")}>
            <Dot customClassName={cx("w-2.5 h-2.5 bg-custom-orange-01")} />
            <p className={cx("text-sm text-custom-gray-05")}>Expense</p>
          </div>
        </div>
      </div>

      <div>
        <Bar height={256} options={options} data={data} />
      </div>
    </div>
  );
};

export default TotalProfitChart;
