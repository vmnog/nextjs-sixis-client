import React from 'react';

import { Container } from './styles';

const Button = ({ onClick, label, style }) => {
  return (
    <Container onClick={onClick} buttonStyle={style}>
      <strong>{label}</strong>
    </Container>
  );
};

export default Button;
