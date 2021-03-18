import { useMutation } from '@apollo/react-hooks';
import FIRST_MT from '../api/mutations/FIRST_MT';
import FIRST_QY from '../api/queries/FIRST_QY';
import Button from './common/Button';
import useInput from '../hooks/useInput';

const CreateTripForm = () => {
  const {
    value: tripTitle,
    bind: bindTripTitle,
    reset: resetTripTitle,
  } = useInput('');

  const [createTrip, { error }] = useMutation(FIRST_MT, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  if (error)
    return (
      <p>
        Error:
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </p>
    );

  const handleCreateTrip = async e => {
    e.preventDefault();
    await createTrip({
      refetchQueries: [{ query: FIRST_QY }],
      variables: {
        destination: `Scranton, PA`,
        isTravellerCovidFree: true,
        title: tripTitle,
      },
    });
    resetTripTitle();
  };
  return (
    <form onSubmit={handleCreateTrip}>
      <div style={{ display: 'flex' }}>
        <input type="text" {...bindTripTitle} />
        <Button style={{ minWidth: 200 }} type="submit">
          Create Trip
        </Button>
      </div>
    </form>
  );
};

export default CreateTripForm;
