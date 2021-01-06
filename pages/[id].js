import PostContainer from '../containers/PostContainer';
import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return <PostContainer post={post} />;
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
