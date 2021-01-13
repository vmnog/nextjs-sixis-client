import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '../../stores/auth.store';

const RouterMiddleware = ({ children }) => {
  const router = useRouter();
  const { isLogged } = useAuthStore();

  const privateRoutes = ['/publish'];

  const handlePrivateRouter = (router) => {
    if (privateRoutes.find((route) => route === router.pathname)) {
      // Se não estiver logado redireciona pra home
      if (!isLogged) {
        router.push('/');
      }
    }
  };

  useEffect(() => {
    handlePrivateRouter(router);
  }, [router, isLogged]);

  return <>{children}</>;
};

export default RouterMiddleware;
