import Head from 'next/head';
import Link from 'next/link';

import { Container } from './styles';

const Home = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Sixis - Últimas Publicações</title>
      </Head>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>
              <button>Visualizar</button>
            </Link>
            <strong>{post.title}</strong>
            <span>{post.date}</span>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
