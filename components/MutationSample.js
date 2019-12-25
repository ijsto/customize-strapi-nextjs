import { useMutation } from '@apollo/react-hooks';
import FIRST_MT from '../api/mutations/FIRST_MT';
import FIRST_QY from '../api/queries/FIRST_QY';

const MutationSample = () => {
  const [createPost, { loading, error }] = useMutation(FIRST_MT, {
    refetchQueries: [{ query: FIRST_QY }]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <button onClick={createPost} aria-label="Create Post" type="button">
        Create Post
      </button>
    </div>
  );
};

export default MutationSample;
