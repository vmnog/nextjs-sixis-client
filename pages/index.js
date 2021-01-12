import HomeContainer from '../containers/HomeContainer';
import { api } from '../services/axios';

const Blog = ({ posts }) => {
  return <HomeContainer posts={posts} />;
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
