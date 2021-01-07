import React from 'react';
import GoBackButton from '../GoBackButton';
import { GlobalStyle } from '../../styles/globals';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/GoBackButton',
  component: GoBackButton,
  argTypes: {
    router: {
      description:
        'instancia do useRouter do next/router do elemento pai para que o botão de voltar possa executar router.back()',
    },
  },
};

const Template = ({ router }) => (
  <>
    <GlobalStyle />
    <GoBackButton router={router} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  router: null,
};
