import { Sizes } from "constants/sizes";
import React from "react";

export type ButtonProps = {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  text: string;
  size: Sizes;
};

export const Button: React.FunctionComponent<ButtonProps> = function ({
  onClick,
  text,
  size,
}) {
  let className =
    "flex items-center px-5 justify-between w-full md:w-286 h-10 border border-solid border-white rounded-full uppercase font-semibold text-white";
    switch (size) {
        case 'xlarge':
            className += ' text-base h-10'
            break;
        case 'large':
            className += ' text-large h-12'
            break;
        case 'standard':
            break;
        case 'small':
            break;
        case 'xsmall':
            break;
    }
  return onClick ? (
    <button className={className}>{text}</button>
  ) : (
    <a className={className}>{text}</a>
  );
};
