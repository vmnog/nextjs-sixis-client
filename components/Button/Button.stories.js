import React from 'react';
import Button from '../Button';
import { GlobalStyle } from '../../styles/globals';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = () => (
  <>
    <GlobalStyle />
    <Button />
  </>
);

export const Default = Template.bind({});
Default.args = {};
