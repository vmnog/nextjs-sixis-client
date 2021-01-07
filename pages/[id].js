import PostContainer from '../containers/PostContainer';
import { useRouter } from 'next/router';
import { api } from '../services/axios';

const Post = ({ post }) => {
  const router = useRouter();

  console.log({ post });

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return <PostContainer post={post} />;
};

// Método que gera as paginas estaticas no tempo de build pra cada post
export async function getStaticPaths() {
  const { data: posts } = await api.get('posts', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDk5NjY2NjgsImV4cCI6MTYxMDA1MzA2OCwic3ViIjoie1wiaWRcIjpcImMwYjcxNTEwLTdhNDktNGNjOC04OTRjLTI2NWUwNTE2ZGIwNFwiLFwidHlwZVwiOlwiYWRtaW5cIn0ifQ.lbwwOVDTL7Y2j3v5-UVsH3Vda063Gb3TJEwZXDg3eIw',
    },
  });

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
  const { data: post } = await api.get(`posts/${context.params.id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDk5NjY2NjgsImV4cCI6MTYxMDA1MzA2OCwic3ViIjoie1wiaWRcIjpcImMwYjcxNTEwLTdhNDktNGNjOC04OTRjLTI2NWUwNTE2ZGIwNFwiLFwidHlwZVwiOlwiYWRtaW5cIn0ifQ.lbwwOVDTL7Y2j3v5-UVsH3Vda063Gb3TJEwZXDg3eIw',
    },
  });

  return { props: { post: post[0] } };
}

export default Post;
