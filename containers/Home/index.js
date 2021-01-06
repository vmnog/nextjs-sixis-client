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
          <Link href={`/${post.id}`}>
            <Post post={post} isListItem={true} />
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
