import cx from "classnames";

const Timeline = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={cx("border-l border-[#5C6CA5] space-y-14 pb-14 ml-3")}>
      {children}
    </div>
  );
};

export default Timeline;
