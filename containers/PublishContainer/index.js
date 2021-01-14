import React from 'react';

import { api } from '../../services/axios';
import { Container } from './styles';
import { useRouter } from 'next/router';
import { useAuthStore } from '../../stores/auth.store';

import Header from '../../components/Header';
import Form from '../../components/Form';
import GoBackButton from '../../components/GoBackButton';

const PublishContainer = () => {
  const router = useRouter();

  const { isLogged, user } = useAuthStore();

  const handlePublish = async (event) => {
    event.preventDefault();

    await api.post('posts', {
      title,
      content,
    });

    router.push('/');
  };

  return (
    <Container>
      <Header isLogged={isLogged} user={user} />
      <GoBackButton router={router} />
      <Form />
    </Container>
  );
};

export default PublishContainer;
