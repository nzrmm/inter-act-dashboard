import { useState } from "react";
import cx from "classnames";

import { ICChevronDown } from "@/assets/svgs";

import { IOption } from "@/types/data";

type IDropdown = {
  options: IOption[];
  customClassName?: string;
  wrapperClassName?: string;
  onChange: (option: IOption) => void;
};

const Dropdown = ({ options, onChange, ...props }: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<IOption>(options[0]);

  const handleSetToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSetSelected = (option: IOption) => {
    setSelected(option);
    onChange(option);

    setIsOpen(false);
  };

  return (
    <div className={cx(props.wrapperClassName)}>
      <div className={cx("relative", props.customClassName)}>
        <div
          className={cx(
            "w-full flex justify-between items-center gap-1",
            "bg-transparent cursor-pointer py-2"
          )}
          onClick={handleSetToggleOpen}
        >
          <p className={cx("text-[10px] text-[#5C6CA5]")}>
            {selected.label || "Chosee"}
          </p>

          <ICChevronDown />
        </div>

        {isOpen && (
          <ul
            className={cx(
              "absolute left-0 w-[130px] bg-dark-05",
              "rounded-md overflow-hidden cursor-pointer mt-2"
            )}
          >
            {options.map((option, index) => {
              return (
                <li
                  key={index}
                  className={cx("px-4 py-2 hover:bg-white/10")}
                  onClick={() => handleSetSelected(option)}
                >
                  <p className={cx("font-medium text-sm")}>{option.label}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  id: "dropdown-input",
  name: "dropdownInput",
  wrapperClassName: "w-full",
};

export default Dropdown;
