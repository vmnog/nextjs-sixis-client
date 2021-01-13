import HomeContainer from '../containers/HomeContainer';
import { api } from '../services/axios';
import RouterMiddleware from '../components/RouterMiddleware';

const Blog = ({ posts }) => {
  return (
    <RouterMiddleware>
      <HomeContainer posts={posts} />
    </RouterMiddleware>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  const { data: posts } = await api.get('posts');

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
