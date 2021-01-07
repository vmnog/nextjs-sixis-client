import Home from '../containers/Home';
import { api } from '../services/axios';

const Blog = ({ posts }) => {
  return <Home posts={posts} />;
};

// This function gets called at build time
export async function getStaticProps() {
  const { data: posts } = await api.get('posts', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDk5NjY2NjgsImV4cCI6MTYxMDA1MzA2OCwic3ViIjoie1wiaWRcIjpcImMwYjcxNTEwLTdhNDktNGNjOC04OTRjLTI2NWUwNTE2ZGIwNFwiLFwidHlwZVwiOlwiYWRtaW5cIn0ifQ.lbwwOVDTL7Y2j3v5-UVsH3Vda063Gb3TJEwZXDg3eIw',
    },
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
