import React from 'react';
import { useRouter } from 'next/router';
import { api } from '../../services/axios';

import Button from '../../components/Button';

import { Container } from './styles';
import { useAuthStore } from '../../stores/auth.store';

const Header = ({ isLogged, user }) => {
  const router = useRouter();
  const { onLogin, onLogout } = useAuthStore();

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

  const handleNavigateToPublish = () => {
    router.push('publish');
  };

  return (
    <Container>
      {isLogged ? (
        <div>
          <strong>{user.email}</strong>
          <div>
            {router.pathname !== '/publish' && (
              <Button
                onClick={handleNavigateToPublish}
                label="Criar Publicação"
                style="filled"
              />
            )}
            <Button onClick={handleLogout} label="Sair" style="outlined" />
          </div>
        </div>
      ) : (
        <Button onClick={handleLogin} label="Entrar" style="filled" />
      )}
    </Container>
  );
};

export default Header;
