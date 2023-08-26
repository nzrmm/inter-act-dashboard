import { useState } from "react";
import cx from "classnames";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Dot, Dropdown } from "@/components/commons";

import { earningDateOptions } from "@/data";
import { IOption } from "@/types/data";

const EarningChart = () => {
  const [data, setData] = useState<IOption>(earningDateOptions[0]);

  return (
    <div className={cx("w-6/12 bg-dark-04 rounded-md p-5")}>
      <div className={cx("flex justify-between items-center mb-6")}>
        <p className={cx("font-bold")}>Earnings</p>
        <Dropdown
          options={earningDateOptions}
          wrapperClassName={cx("min-w-[70px]")}
          onChange={(option) => setData(option)}
        />
      </div>

      <div className={cx("flex items-center gap-4")}>
        <div className={cx("w-[128px] h-[128px]")}>
          <CircularProgressbarWithChildren
            value={data?.value?.sales?.percentage}
            strokeWidth={10}
            styles={buildStyles({
              trailColor: "#1F2849",
              pathColor: "#0BB885",
            })}
          >
            <div className={cx("w-8/12")}>
              <CircularProgressbar
                value={data?.value?.orders?.percentage}
                strokeWidth={16}
                styles={buildStyles({
                  trailColor: "#1F2849",
                  pathColor: "#FF814A",
                })}
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={cx("flex-1")}>
          <div className={cx("flex items-center gap-4 mb-7")}>
            <Dot customClassName={cx("bg-custom-green-01")} />
            <div>
              <p className={cx("text-xs")}>Total Sales</p>
              <p className={cx("text-sm text-custom-gray-02")}>
                {data?.value?.sales?.total}
              </p>
            </div>
          </div>

          <div className={cx("flex items-center gap-4")}>
            <Dot customClassName={cx("bg-custom-orange-01")} />
            <div>
              <p className={cx("text-xs")}>Total Orders</p>
              <p className={cx("text-sm text-custom-gray-02")}>
                {data?.value?.orders?.total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningChart;
