import cx from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const crumbs =
    location.pathname === "/"
      ? ["home", "dashboard"]
      : location.pathname.split("/").filter((crumb) => crumb !== "");

  const linkTo = (crumb: any, index: number) => {
    if (crumb === "home") {
      return "/";
    }

    return `/${crumbs.slice(0, index + 1).join("/")}`;
  };

  const isLast = (index: number) => {
    return index === crumbs.length - 1;
  };

  return (
    <div className={cx("flex items-center gap-2")}>
      {crumbs.map((crumb, index) => {
        return (
          <div key={crumb} className={cx("flex items-center gap-2")}>
            {index > 0 && <span className={cx("text-[#6C747D]")}>/</span>}

            {isLast(index) ? (
              <span
                className={cx("capitalize text-sm font-medium text-[#0BB885]")}
              >
                {crumb}
              </span>
            ) : (
              <Link
                to={linkTo(crumb, index)}
                className={cx("capitalize text-sm font-medium text-[#6C747D]")}
              >
                {crumb}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
