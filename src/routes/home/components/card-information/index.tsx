import cx from "classnames";

import { IInformation } from "@/types/data";

type ICardInformation = {
  data: IInformation;
  isFirst?: boolean;
};

const CardInformation = ({ data, isFirst }: ICardInformation) => {
  return (
    <div
      className={cx(
        "w-full flex items-center gap-5 rounded-lg px-5 py-[22px]",
        {
          "bg-[#0BB885]": isFirst,
          "bg-dark-04": !isFirst,
        }
      )}
    >
      {data.icon}
      <div>
        <p className={cx("font-bold mb-0.5")}>{data.name}</p>
        <p
          className={cx("text-sm", {
            "font-bold": isFirst,
            "font-medium text-[#6C747D]": !isFirst,
          })}
        >
          {data.value}
        </p>
      </div>
    </div>
  );
};

export default CardInformation;