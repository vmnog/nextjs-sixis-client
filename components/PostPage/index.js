import React from 'react';

import { Container } from './styles';

const PostPage = ({ post }) => {
  return (
    <Container key={post.id}>
      <h1>{post.title}</h1>
      <span>Data de publicação: {post.date}</span>
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </Container>
  );
};

export default PostPage;
