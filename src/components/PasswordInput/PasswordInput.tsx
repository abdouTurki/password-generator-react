import React, { useState } from 'react';

import { CopyIcon } from '../icons/copyIcon.tsx';

import './PasswordInput.scss';

interface PasswordInputProps {
  password: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };

  return (
    <div className="password-input">
      <input type="text" value={password} readOnly />
      <button onClick={copyToClipboard}>
        <CopyIcon size={16} />
      </button>
      {tooltipVisible && <div className="tooltip">Copied!</div>}
    </div>
  );
};

export default PasswordInput;
