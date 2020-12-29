import Link from 'next/link';

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
