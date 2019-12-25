import { useQuery } from '@apollo/react-hooks';
import FIRST_QY from '../api/queries/FIRST_QY';
import Card from './dataDisplay/Card';

const QuerySample = () => {
  const { data, loading, error } = useQuery(FIRST_QY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { posts } = data;
  return (
    <div>
      <h2>Posts</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {posts.map(p => (
          <Card key={p.id}>
            <h3>{p.title}</h3>
            <div>{p.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuerySample;
