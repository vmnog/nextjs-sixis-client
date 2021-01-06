import Home from '../containers/Home';

const Blog = ({ posts }) => {
  return <Home posts={posts} />;
};

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
