import React from 'react';

import { Container } from './styles';
import { handleLatinizeString } from '../../utils/handleLatinizeString';

const Input = ({ label, onChange, value }, ...props) => {
  return (
    <Container>
      <label htmlFor={handleLatinizeString(label)}>{label}</label>
      <input
        id={handleLatinizeString(label)}
        onChange={onChange}
        value={value}
        placeholder={`${label} da publicação`}
        autoComplete="off"
        {...props}
      />
    </Container>
  );
};

export default Input;
