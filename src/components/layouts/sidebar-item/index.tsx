import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import { IRoutes } from "@/types/constants";

type ISidebarItem = React.PropsWithChildren<{
  data: IRoutes;
}>;

const SidebarItem = ({ data, children }: ISidebarItem) => {
  return (
    <NavLink
      to={data.to}
      className={({ isActive }) => {
        return cx("font-medium text-custom-gray-01 rounded-lg px-3 py-3.5", {
          "bg-dark-03": isActive,
        });
      }}
    >
      <div className={cx("flex justify-between items-center")}>
        <div className={cx("flex items-center gap-3")}>
          {data.icon}
          {children}
        </div>

        {data?.value && (
          <div
            className={cx(
              "w-[18px] h-[18px] flex justify-center items-center bg-custom-green-02 rounded-[4px]",
            )}
          >
            <span className={cx("text-xs font-medium")}>{data.value}</span>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default SidebarItem;
