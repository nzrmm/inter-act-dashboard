import cx from "classnames";

type IDot = {
  customClassName?: string;
};

const Dot = ({ customClassName }: IDot) => {
  return (
    <div>
      <div className={cx("w-2 h-2 rounded-full", customClassName)}></div>
    </div>
  );
};

Dot.defaultProps = {
  customClassName: "bg-gray-500",
};

export default Dot;
