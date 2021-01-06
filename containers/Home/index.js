import Head from 'next/head';
import Link from 'next/link';
import Post from '../../components/Post';

import { Container } from './styles';

const Home = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Sixis - Últimas Publicações</title>
      </Head>

      <h1>Últimas Publicações</h1>
      <ul>
        {posts.map((post) => (
          <Post post={post} isListItem={true} />
        ))}
      </ul>
    </Container>
  );
};

export default Home;
