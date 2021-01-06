import React from 'react';
import Head from 'next/head';
import { Container } from './styles';
import { useRouter } from 'next/router';
import PostPage from '../../components/PostPage';

const PostContainer = ({ post }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <strong onClick={handleGoBack}>{'<-'} Voltar</strong>
      <PostPage post={post} />
    </Container>
  );
};

export default PostContainer;
