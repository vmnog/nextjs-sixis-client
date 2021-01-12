import Head from 'next/head';
import Post from '../../components/Post';
import Header from '../../components/Header';
import { useAuthStore } from '../../stores/auth.store';

import { Container } from './styles';

const Home = ({ posts }) => {
  const { isLogged, user } = useAuthStore();

  return (
    <Container>
      <Head>
        <title>Sixis - Últimas Publicações</title>
      </Head>
      <Header isLogged={isLogged} user={user} />
      <h1>Últimas Publicações</h1>
      <ul>
        {posts.map((post) => (
          <Post key={post.post_id} post={post} isListItem={true} />
        ))}
      </ul>
    </Container>
  );
};

export default Home;
