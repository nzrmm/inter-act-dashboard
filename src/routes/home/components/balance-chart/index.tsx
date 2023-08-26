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

import { Button, Dropdown } from "@/components/commons";

import { dataBalance } from "@/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { intersect: false },
  },
  scales: {
    x: { display: false },
    y: {
      display: false,
      ticks: {
        stepSize: 250,
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

const data: ChartData<"line"> = {
  labels: dataBalance.values.map((item) => item.label),
  datasets: [
    {
      label: "Balance",
      data: dataBalance.values.map((item) => item.balance),
      borderColor: "#0BB885",
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.4,
    },
  ],
};

const BalanceChart = () => {
  return (
    <div
      className={cx(
        "w-1/3 h-full bg-dark-04 rounded-e-md px-5 py-6 border-l border-dark-05"
      )}
    >
      <div className={cx("flex flex-col items-center")}>
        <Dropdown
          variant="outline"
          options={[{ label: "2023", value: 2023 }]}
          wrapperClassName={cx("max-w-[70px] mb-14")}
          onChange={(option) => console.log(option)}
        />

        <div className={cx("mb-9")}>
          <p className={cx("font-bold text-4xl mb-3")}>$842.98</p>
          <p className={cx("font-semibold text-xxs text-custom-gray-05")}>
            Latest Month Balance $426.20k
          </p>
        </div>

        <div className={cx("w-full h-[42px] mb-11")}>
          <Line options={options} data={data} />
        </div>

        <div>
          <Button id="view-report-button" size="small" variant="primary">
            View Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
