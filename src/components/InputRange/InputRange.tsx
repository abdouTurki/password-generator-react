import React from "react";

import "./InputRange.scss";

interface InputRangeProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const InputRange: React.FC<InputRangeProps> = ({
  label,
  min,
  max,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="input-range">
      <label>
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputRange;
