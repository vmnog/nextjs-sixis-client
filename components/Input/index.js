import React from 'react';

import { Container } from './styles';
import { handleLatinizeString } from '../../utils/handleLatinizeString';

const Input = (
  { label, name, onChange, onBlur, value, maxLength },
  ...props
) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={`${label} da publicação`}
        autoComplete="off"
        maxLength={maxLength}
        {...props}
      />
    </Container>
  );
};

export default Input;
