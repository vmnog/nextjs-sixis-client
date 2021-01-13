import React from 'react';

import { Container } from './styles';

const Input = ({ label, onChange, value }, ...props) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
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
