import React from 'react';
import Head from 'next/head';
import { Container } from './styles';
import { useRouter } from 'next/router';
import GoBackButton from '../../components/GoBackButton';
import PostPage from '../../components/PostPage';

const PostContainer = ({ post }) => {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <GoBackButton router={router} />
      <PostPage post={post} />
    </Container>
  );
};

export default PostContainer;
