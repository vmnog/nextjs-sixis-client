import React from 'react';
import { Container } from './styles';
import { formatDate } from '../../utils/handleFormatDate';
import GoBackButton from '../../components/GoBackButton';
import { useRouter } from 'next/router';

const PostPage = ({ post }) => {
  const router = useRouter();

  return (
    <Container key={post.id}>
      <GoBackButton router={router} />
      <h1>{post.title}</h1>
      <span>Data de publicação: {formatDate(post.created_at)}</span>
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </Container>
  );
};

export default PostPage;
