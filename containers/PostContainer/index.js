import React from 'react';
import Head from 'next/head';
import { Container } from './styles';
import PostPage from '../../components/PostPage';
import Header from '../../components/Header';

const PostContainer = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />

      <PostPage post={post} />
    </Container>
  );
};

export default PostContainer;
