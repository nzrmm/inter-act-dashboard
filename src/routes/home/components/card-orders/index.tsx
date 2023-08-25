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

import { dataOrder } from "@/data";

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
    legend: {
      display: false,
    },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const data: ChartData<"bar"> = {
  labels: dataOrder.values.map((item) => item.label),
  datasets: [
    {
      data: dataOrder.values.map((item) => item.percentage),
      backgroundColor: "#FF814A",
      barThickness: 8,
      borderRadius: 16,
      borderSkipped: false,
    },
  ],
};

const CardOrders = () => {
  return (
    <div className={cx("w-[183px] h-full bg-dark-04 rounded-md px-6 py-5")}>
      <div className={cx("mb-8")}>
        <p className={cx("font-medium mb-2")}>Orders</p>
        <p className={cx("font-medium text-3xl text-[#FF814A]")}>
          {dataOrder.total}
        </p>
      </div>

      <div>
        <Bar height={80} options={options} data={data} />
      </div>
    </div>
  );
};

export default CardOrders;
