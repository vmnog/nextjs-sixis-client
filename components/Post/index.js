import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

const Post = ({ post: { id, title, content, date }, isListItem }) => {
  return (
    <Link href={`/${id}`}>
      <Container key={id} spacedItem={isListItem}>
        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
        <p>{content}</p>
      </Container>
    </Link>
  );
};

export default Post;
