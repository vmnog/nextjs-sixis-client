import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

const Post = ({ post: { id, title, content, created_at }, isListItem }) => {
  return (
    <Link href={`/${id}`}>
      <Container key={id} spacedItem={isListItem}>
        <div>
          <strong>{title}</strong>
          <span>{created_at}</span>
        </div>
        <p>{content}</p>
      </Container>
    </Link>
  );
};

export default Post;
