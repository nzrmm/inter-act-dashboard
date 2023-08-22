import cx from "classnames";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type ISidebarItem = React.PropsWithChildren<{
  icon: React.ReactNode;
  value?: string | number;
}> &
  NavLinkProps;

const SidebarItem = ({ to, icon, value, children, ...props }: ISidebarItem) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cx("font-medium text-[#6C747D] rounded-lg px-3 py-[14px]", {
          "bg-dark-03": isActive,
        });
      }}
      {...props}
    >
      <div className={cx("flex justify-between items-center")}>
        <div className={cx("flex items-center gap-3")}>
          {icon}
          {children}
        </div>

        {value && (
          <div
            className={cx(
              "w-[18px] h-[18px] flex justify-center items-center bg-[#98FFE0] rounded-[4px]"
            )}
          >
            <span className={cx("text-xs font-medium")}>{value}</span>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default SidebarItem;
