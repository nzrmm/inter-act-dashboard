import cx from "classnames";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "../../layouts";

const Root = () => {
  return (
    <main className={cx("antialiased min-h-screen bg-dark-01 text-white")}>
      <div className={cx("flex")}>
        <Sidebar />
        <div className={cx("flex-1")}>
          <Header />
          <div className={cx("px-8 py-11")}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Root;
