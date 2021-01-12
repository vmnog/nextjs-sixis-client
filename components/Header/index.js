import React from 'react';
import { api } from '../../services/axios';

import Button from '../../components/Button';

import { Container } from './styles';
import { useAuthStore } from '../../stores/auth.store';

const Header = ({ isLogged }) => {
  const { onLogin, onLogout, user } = useAuthStore();

  const handleLogin = async () => {
    const { data } = await api.post('sessions', {
      email: 'admin@admin.com',
      password: '123',
      type: 'admin',
    });

    api.interceptors.request.use((config) => {
      const { token } = data;
      config.headers.Authorization = 'Bearer ' + token;

      return config;
    });

    onLogin(data.token, data.user);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Container>
      {isLogged ? (
        <div>
          <strong>{user.email}</strong>
          <Button onClick={handleLogout} label="Sair" style="outlined" />
        </div>
      ) : (
        <Button onClick={handleLogin} label="Entrar" style="filled" />
      )}
    </Container>
  );
};

export default Header;
