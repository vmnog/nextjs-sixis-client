import React from 'react';
import Header from '../Header';
import { GlobalStyle } from '../../styles/globals';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    isLogged: 'boolean',
  },
};

const user = {
  email: 'admin@admin.com',
};

const Template = ({ isLogged }) => (
  <>
    <GlobalStyle />
    <Header isLogged={isLogged} user={user} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  isLogged: false,
};
