import React from 'react';
import Button from '../Button';
import { GlobalStyle } from '../../styles/globals';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: {
      description: 'Evento acionado ao clicar no botão',
    },
    label: {
      description: 'Texto contído no botão',
    },
    style: {
      description: 'Define estilização do botão',
      control: {
        type: 'select',
        options: ['filled', 'outlined'],
      },
    },
  },
};

const Template = ({ onClick, label, style }) => (
  <>
    <GlobalStyle />
    <Button onClick={onClick} label={label} style={style} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  onClick: action('onClick'),
  label: 'Entrar',
  style: 'filled',
};
