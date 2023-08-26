import cx from "classnames";

const Timeline = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={cx("border-l border-dark-06 space-y-12 pb-12 ml-3")}>
      {children}
    </div>
  );
};

export default Timeline;
