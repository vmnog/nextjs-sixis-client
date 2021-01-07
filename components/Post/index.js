import React from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { formatDate } from '../../utils/handleFormatDate';

const Post = ({ post: { id, title, content, created_at }, isListItem }) => {
  return (
    <Link href={`/${id}`}>
      <Container key={id} spacedItem={isListItem}>
        <div>
          <strong>{title}</strong>
          <span>{formatDate(created_at)}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </Container>
    </Link>
  );
};

export default Post;
