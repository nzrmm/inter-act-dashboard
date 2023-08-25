import cx from "classnames";

import {
  CardProfit,
  CardOrders,
  CardEarnings,
  CardInformation,
  CardActivityOverview,
} from "@/routes/home/components";

import { informations } from "@/data";

const Home = () => {
  return (
    <section>
      <div className={cx("mb-8")}>
        <p className={cx("font-bold text-3xl tracking-wide")}>
          Marketing Dashboard
        </p>
      </div>

      <div className={cx("w-full flex gap-6 mb-6")}>
        {informations.map((item, index) => {
          return (
            <CardInformation key={index} data={item} isFirst={index === 0} />
          );
        })}
      </div>

      <div className={cx("w-full h-[600px] flex gap-6")}>
        <div className={cx("w-3/5")}>
          <div className={cx("flex gap-4 h-[220px]")}>
            <CardEarnings />
            <CardOrders />
            <CardProfit />
          </div>
        </div>

        <div className={cx("w-2/5")}>
          <CardActivityOverview />
        </div>
      </div>
    </section>
  );
};

export default Home;
