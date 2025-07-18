import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
