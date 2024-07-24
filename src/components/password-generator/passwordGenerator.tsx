import React from 'react';

import Checkbox from '../checkBox/checkBox.tsx';
import PasswordInput from '../PasswordInput/PasswordInput.tsx';
import InputRange from '../InputRange/InputRange.tsx';
import { usePasswordGenerator } from '../../hooks/useGeneratePassword.ts';

import './passwordGenerator.scss';

export const PasswordGenerator: React.FC = () => {
  const { options, password, generatePassword, updateOptions } = usePasswordGenerator();
  const { length, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options;
  return (
    <div className="password-generator">
      <PasswordInput password={password} />
      <InputRange label="Password Length" min={4} max={32} value={length} onChange={(length) => updateOptions({ length })} />
      <div>
        <Checkbox
          label="Include Lowercase"
          checked={includeLowercase}
          onChange={(checked) => updateOptions({ includeLowercase: checked })}
        />
        <Checkbox
          label="Include Uppercase"
          checked={includeUppercase}
          onChange={(checked) => updateOptions({ includeUppercase: checked })}
        />
        <Checkbox
          label="Include Numbers"
          checked={includeNumbers}
          onChange={(checked) => updateOptions({ includeNumbers: checked })}
        />
        <Checkbox
          label="Include Symbols"
          checked={includeSymbols}
          onChange={(checked) => updateOptions({ includeSymbols: checked })}
        />
      </div>
      <button className={'generate-button'} onClick={generatePassword}>
        Generate
      </button>
    </div>
  );
};
