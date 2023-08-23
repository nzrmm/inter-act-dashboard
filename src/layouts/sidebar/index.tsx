import cx from "classnames";

import { SidebarItem } from "@/components/layouts";
import { logo } from "@/assets/images";

import { ROUTES } from "@/constants";

const Sidebar = () => {
  return (
    <aside className={cx("sticky top-0 w-[250px] h-screen bg-dark-02 p-5")}>
      <div className={cx("mb-8")}>
        <img className={cx("w-[132px] h-[35px]")} src={logo} alt="logo-image" />
      </div>

      <div className={cx("flex flex-col gap-2 py-8")}>
        {ROUTES.map((item, index) => {
          return (
            <SidebarItem key={index} data={item}>
              {item.name}
            </SidebarItem>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
