import React from 'react';
import Post from '../Post';
import { GlobalStyle } from '../../styles/globals';

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
    created_at: {
      description: 'Data de publicação',
    },
    isListItem: {
      control: 'boolean',
      description:
        'Aplica um espaçamento diferente caso seja um item de uma lista',
    },
  },
};

const post = {
  id: '204b1a8a-a906-489b-968c-a8ecac45df65',
  title: 'O aumento do diálogo entre os diferentes setores produtivos',
  content:
    'No entanto, não podemos esquecer que a complexidade dos estudos efetuados talvez venha a ressaltar a relatividade do investimento em reciclagem técnica.',
  created_at: '2021-01-06T20:58:22.435Z',
};

const Template = ({ id, title, content, created_at, isListItem }) => (
  <>
    <GlobalStyle />
    <Post post={{ id, title, content, created_at }} isListItem={isListItem} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  id: post.id,
  title: post.title,
  content: post.content,
  created_at: post.created_at,
  isListItem: false,
};
