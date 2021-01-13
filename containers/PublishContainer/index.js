import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { api } from '../../services/axios';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import GoBackButton from '../../components/GoBackButton';
import { useAuthStore } from '../../stores/auth.store';
import { Container } from './styles';

const PublishContainer = () => {
  const router = useRouter();

  const { isLogged, user } = useAuthStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      {isLogged && (
        <>
          <Header isLogged={isLogged} user={user} />
          <GoBackButton router={router} />
          <form onSubmit={handlePublish}>
            <Input
              label="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              label="Conteúdo"
              multiline
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <Button label="Publicar" onClick={handlePublish} style="filled" />
          </form>
        </>
      )}
    </Container>
  );
};

export default PublishContainer;
