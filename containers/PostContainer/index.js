import React from 'react';
import Head from 'next/head';
import { Container } from './styles';

const PostContainer = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div key={post.id}>
        <strong>{post.title}</strong>
        <span>{post.date}</span>
        <p>{post.content}</p>
      </div>
    </Container>
  );
};

export default PostContainer;
