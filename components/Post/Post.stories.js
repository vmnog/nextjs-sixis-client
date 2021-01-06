import React from 'react';
import { GlobalStyle } from '../../styles/globals';
import { action } from '@storybook/addon-actions';

import Post from '../Post';

export default {
  title: 'Example/Post',
  component: Post,
  argTypes: {
    id: {
      description: 'Chave única',
    },
    title: {
      description: 'Título principal',
    },
    content: {
      description: 'Conteúdo',
    },
    date: {
      description: 'Data de publicação',
    },
  },
};

const post = {
  id: '204b1a8a-a906-489b-968c-a8ecac45df65',
  title: 'O aumento do diálogo entre os diferentes setores produtivos',
  content:
    'No entanto, não podemos esquecer que a complexidade dos estudos efetuados talvez venha a ressaltar a relatividade do investimento em reciclagem técnica.',
  date: '29/12/2020',
};

const Template = (post) => (
  <>
    <GlobalStyle />
    <Post post={post} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  id: post.id,
  title: post.title,
  content: post.content,
  date: post.date,
};
