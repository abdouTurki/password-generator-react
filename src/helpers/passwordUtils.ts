import { PasswordOptions } from '../types/passwordOptions';

export const getCharset = (options: PasswordOptions) => {
  const charsets: string[] = [];

  if (options.includeLowercase) charsets.push('abcdefghijklmnopqrstuvwxyz');
  if (options.includeUppercase) charsets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (options.includeNumbers) charsets.push('0123456789');
  if (options.includeSymbols) charsets.push('!@#$%^&*()_+[]{}|;:,.<>?');

  return charsets;
};

export const getRandomCharacterFromCharset = (charset: string) => {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};
