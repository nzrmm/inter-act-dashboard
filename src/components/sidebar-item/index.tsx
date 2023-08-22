import cx from "classnames";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type ISidebarItem = React.PropsWithChildren<{
  icon: React.ReactNode;
}> &
  NavLinkProps;

const SidebarItem = ({ to, icon, children, ...props }: ISidebarItem) => {
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
      <div className={cx("flex items-center gap-3")}>
        {icon}
        {children}
      </div>
    </NavLink>
  );
};

export default SidebarItem;
