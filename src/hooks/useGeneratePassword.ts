import { useState } from 'react';

import { getCharset, getRandomCharacterFromCharset } from '../helpers/passwordUtils';
import { PasswordOptions } from '../types/passwordOptions';

export const usePasswordGenerator = () => {
  const initialOptions: PasswordOptions = {
    length: 12,
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  };

  const [options, setOptions] = useState(initialOptions);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charsets = getCharset(options);
    if (charsets.length === 0) return;
    const initialPassword = charsets.map(getRandomCharacterFromCharset);
    const remainingLength = options.length - initialPassword.length;
    const combinedCharset = charsets.join('');
    const additionalCharacters = Array.from({ length: remainingLength }, () => {
      const randomIndex = Math.floor(Math.random() * combinedCharset.length);
      return combinedCharset[randomIndex];
    });

    const finalPassword = [...initialPassword, ...additionalCharacters].sort(() => Math.random() - 0.5).join('');

    setPassword(finalPassword);
  };

  const updateOptions = (newOptions: Partial<PasswordOptions>) => {
    const updatedOptions = { ...options, ...newOptions };
    const { includeLowercase, includeUppercase, includeNumbers, includeSymbols } = updatedOptions;
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      return;
    }
    setOptions(updatedOptions);
  };

  return { options, password, generatePassword, updateOptions };
};
