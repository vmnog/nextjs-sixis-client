import Head from 'next/head';
import Post from '../../components/Post';
import Header from '../../components/Header';

import { Container } from './styles';

const Home = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Sixis - Últimas Publicações</title>
      </Head>
      <Header />
      <h1>Últimas Publicações</h1>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} isListItem={true} />
        ))}
      </ul>
    </Container>
  );
};

export default Home;
