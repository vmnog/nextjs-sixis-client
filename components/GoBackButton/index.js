import React from 'react';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/';
import { Container } from './styles';

const GoBackButton = ({ router }) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container onClick={handleGoBack}>
      <strong>
        <LeftArrowAlt size={30} color="var(--red)" />
        Voltar
      </strong>
    </Container>
  );
};

export default GoBackButton;
