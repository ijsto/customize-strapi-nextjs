import Cookies from 'js-cookie';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import POSTS_Q from '../api/queries/POSTS_Q';

import Authentication from '../components/dataEntry/Authentication';
import CreatePostForm from '../components/CreatePostForm';
import PostList from '../components/PostList';
import BloggerDonald from '../components/BloggerDonald';

const BlogPage = () => {
  const [token, setToken] = useState(null);

  const { data, error } = useQuery(POSTS_Q, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  useEffect(() => {
    setToken(Cookies.get('jwt'));
  }, []);

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  const posts = data?.posts ?? [];

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Donald's qwaavel bwog!</h1>

      {!token && <Authentication />}

      <CreatePostForm />

      {posts?.length > 0 && (
        <h2 style={{ textAlign: 'center' }}>Existing posts</h2>
      )}
      <PostList posts={posts} />
      <BloggerDonald posts={posts} />
    </div>
  );
};

export default BlogPage;
