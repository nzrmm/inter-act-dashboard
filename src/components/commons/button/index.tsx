import React from "react";
import cx from "classnames";

type IButton = React.PropsWithChildren<{
  id: string;
  size: "small";
  variant: "primary";
  customClassName?: string;
  onClick?: () => void;
}>;

const Button = ({ id, children, size, variant, ...props }: IButton) => {
  const sizeClass = {
    small: "px-5 py-2 text-sm font-bold rounded-md",
  }[size];

  const variantClass = {
    primary: "bg-custom-green-01 text-white hover:bg-custom-green-01/90",
  }[variant];

  return (
    <div>
      <button
        id={id}
        className={cx(sizeClass, variantClass, props.customClassName)}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
