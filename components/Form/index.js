import React from 'react';
import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

const Form = ({ handlePublish }) => {
  return (
    <Container>
      <form onSubmit={handlePublish}>
        <Button label="Publicar" onClick={handlePublish} style="filled" />
      </form>
    </Container>
  );
};

export default Form;
