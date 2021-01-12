import React from 'react';

import { Container } from './styles';

const Input = ({ label }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={`${label} da publicação`}
        autoComplete="off"
      />
    </Container>
  );
};

export default Input;
