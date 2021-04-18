import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

import CREATE_POST_M from '../api/mutations/CREATE_POST_M';
import POSTS_Q from '../api/queries/POSTS_Q';

import Button from './common/Button';

const CreatePostForm = () => {
  const { handleSubmit, register } = useForm();

  const [createPost, { error }] = useMutation(CREATE_POST_M, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  const handleCreatePost = async ({ body, title }) => {
    await createPost({
      refetchQueries: [{ query: POSTS_Q }],
      variables: {
        body,
        title,
      },
    });
  };

  return (
    <>
      {error && (
        <h3 style={{ color: '#cd0200', textAlign: 'center' }}>
          Uh-oh! {error.message}
        </h3>
      )}

      <form onSubmit={handleSubmit(handleCreatePost)}>
        <div style={{ display: 'flex' }}>
          <input {...register('title')} />
          <Button style={{ minWidth: 200 }} type="submit">
            Create Post
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
