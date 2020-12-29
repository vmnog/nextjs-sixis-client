import Head from 'next/head';
import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div key={post.id}>
        <span>{post.date}</span>
        <strong>{post.title}</strong>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

// Método que gera as paginas estaticas no tempo de build pra cada post
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

// Método que acha o resto das informações do post passado pelo params.id
export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

export default Post;
