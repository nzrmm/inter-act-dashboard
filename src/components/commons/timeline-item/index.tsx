import cx from "classnames";

const TimelineItem = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={cx("relative")}>
      <div
        className={cx(
          "w-6 h-6 absolute -left-3 bg-dark-04 rounded-full",
          "border-2 border-custom-orange-01",
        )}
      ></div>
      <div className={cx("pl-8 pt-1")}>{children}</div>
    </div>
  );
};

export default TimelineItem;
