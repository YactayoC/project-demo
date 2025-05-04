import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type: "button" | "submit" | "reset";
  bgColor?: string;
  bgColorHover?: string;
  textColor?: string;
  width?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  bgColor = "bg-yellow-500",
  bgColorHover = "bg-yellow-600",
  textColor = "text-white",
  width = "w-1/2",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        width,
        bgColor,
        `hover:${bgColorHover} ${textColor} font-semibold py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer`,
        className
      )}
    >
      {children}
    </button>
  );
}
