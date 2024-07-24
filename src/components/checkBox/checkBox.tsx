import React from "react";

import "./checkbox.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </div>
  );
};

export default Checkbox;
