import React from 'react';
import { Container } from './styles';
import { formatDate } from '../../utils/handleFormatDate';

const PostPage = ({ post }) => {
  return (
    <Container key={post.id}>
      <h1>{post.title}</h1>
      <span>Data de publicação: {formatDate(post.created_at)}</span>
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </Container>
  );
};

export default PostPage;
