import Card from './dataDisplay/Card';

const PostList = ({ posts }) => {
  return posts?.map(post => (
    <Card key={post?.id}>
      <h3>{post?.title}</h3>

      <p>
        {post?.body ||
          'Look at that no body. Look at that no body. It worked off. 🏋🏼‍♂️'}
      </p>
    </Card>
  ));
};

export default PostList;
