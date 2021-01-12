import Home from '../containers/Home';
import { api } from '../services/axios';

const Blog = ({ posts }) => {
  return <Home posts={posts} />;
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
