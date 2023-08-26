import cx from "classnames";

import { Dot } from "@/components/commons";

const Header = () => {
  return (
    <header
      className={cx("sticky top-0 bg-dark-01", " border-b border-b-[#4B5259]")}
    >
      <div className={cx("h-[60px] flex justify-end items-center gap-3 px-11")}>
        <div
          className={cx(
            "relative w-9 h-9 rounded-full",
            "bg-[#B5B4B4] border border-white",
          )}
        >
          <Dot customClassName={cx("absolute -right-1 top-1 bg-[#5CCC5A]")} />
        </div>

        <p className={cx("font-medium text-sm")}>Hello, User</p>
      </div>
    </header>
  );
};

export default Header;
