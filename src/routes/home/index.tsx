import cx from "classnames";
import { Link } from "react-router-dom";

import { Breadcrumb } from "@/components/commons";

import {
  ProfitChart,
  OrderChart,
  BalanceChart,
  EarningChart,
  TotalProfitChart,
  InformationCard,
  ActivityOverviewCard,
} from "@/routes/home/components";

import { dataInformations } from "@/data";

const Home = () => {
  return (
    <section>
      <div className={cx("mb-8")}>
        <p className={cx("font-bold text-3xl tracking-wide mb-[10px]")}>
          Marketing Dashboard
        </p>
        <Breadcrumb />
      </div>

      <div className={cx("grid grid-cols-5 gap-6 mb-6")}>
        {dataInformations.map((item, index) => {
          return (
            <InformationCard key={index} data={item} isFirst={index === 0} />
          );
        })}
      </div>

      <div className={cx("grid grid-cols-5 h-[600px] gap-6 mb-9")}>
        <div className={cx("col-span-3")}>
          <div className={cx("h-full flex flex-col gap-5")}>
            <div className={cx("flex gap-4 h-[220px]")}>
              <EarningChart />
              <OrderChart />
              <ProfitChart />
            </div>
            <div className={cx("flex-1 flex")}>
              <TotalProfitChart />
              <BalanceChart />
            </div>
          </div>
        </div>

        <div className={cx("col-span-2")}>
          <ActivityOverviewCard />
        </div>
      </div>

      <div className={cx("flex items-center gap-6")}>
        <Link to={"/"} className={cx("text-xs text-custom-gray-02")}>
          Privacy Policy
        </Link>
        <Link to={"/"} className={cx("text-xs text-custom-gray-02")}>
          Terms of Use
        </Link>
      </div>
    </section>
  );
};

export default Home;
