import React from 'react';
import Link from 'next/link';
import { handleLimitString } from '../../utils/handleLimitString';
import { Container } from './styles';

const Post = ({ post: { id, title, content, date } }) => {
  return (
    <Container key={id}>
      <div>
        <strong>{title}</strong>
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </Container>
  );
};

export default Post;
