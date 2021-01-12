import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { useAuthStore } from '../../stores/auth.store';
import { Container } from './styles';

const PublishContainer = () => {
  const { isLogged, user } = useAuthStore();

  return (
    <Container>
      <Header isLogged={isLogged} user={user} />
      <Input label="Título" />
    </Container>
  );
};

export default PublishContainer;
