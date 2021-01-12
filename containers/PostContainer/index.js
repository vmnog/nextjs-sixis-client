import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PostPage from '../../components/PostPage';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { api } from '../../services/axios';

import { Container } from './styles';
import { useAuthStore } from '../../stores/auth.store';

const PostContainer = ({ post }) => {
  const { isLogged, token } = useAuthStore();
  const router = useRouter();

  const handleRemove = async () => {
    await api.delete(`posts/${post.post_id}`);

    router.push('/');
  };

  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header isLogged={isLogged} />

      <PostPage post={post} />

      {isLogged && (
        <Button
          label="Remover publicação"
          onClick={handleRemove}
          style="filled"
        />
      )}
    </Container>
  );
};

export default PostContainer;
