import React from 'react';
import Input from '../Input';
import { GlobalStyle } from '../../styles/globals';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    label: 'string',
  },
};

const Template = ({ label }) => (
  <>
    <GlobalStyle />
    <Input label={label} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Título',
};
