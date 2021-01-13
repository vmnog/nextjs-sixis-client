import RouterMiddleware from '../components/RouterMiddleware';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <RouterMiddleware>
      <GlobalStyle />
      <Component {...pageProps} />
    </RouterMiddleware>
  );
}

export default MyApp;
