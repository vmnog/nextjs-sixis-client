import PostContainer from '../containers/PostContainer';
import { useRouter } from 'next/router';
import { api } from '../services/axios';
import RouterMiddleware from '../components/RouterMiddleware';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <RouterMiddleware>
      <PostContainer post={post} />
    </RouterMiddleware>
  );
};

// Método que gera as paginas estaticas no tempo de build pra cada post
export async function getStaticPaths() {
  const { data: posts } = await api.get('posts');

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.post_id,
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
  const { data: post } = await api.get(`posts/${context.params.id}`);

  return { props: { post } };
}

export default Post;
