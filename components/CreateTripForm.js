import { useMutation } from '@apollo/react-hooks';
import FIRST_MT from '../api/mutations/FIRST_MT';
import FIRST_QY from '../api/queries/FIRST_QY';
import Button from './common/Button';
import useInput from '../hooks/useInput';
import Checkbox from './dataEntry/Checkbox';

const CreateTripForm = () => {
  const {
    value: tripTitle,
    bind: bindTripTitle,
    reset: resetTripTitle,
  } = useInput('');
  const {
    checked: covidCheck,
    bind: bindCovidCheck,
    reset: resetCovidCheck,
  } = useInput(false);

  const [createTrip, { error }] = useMutation(FIRST_MT, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  const handleCreateTrip = async e => {
    e.preventDefault();
    await createTrip({
      refetchQueries: [{ query: FIRST_QY }],
      variables: {
        destination: `Scranton, PA`,
        isTravellerCovidFree: covidCheck || false,
        title: tripTitle,
      },
    });
    resetTripTitle();
    resetCovidCheck(false);
  };
  return (
    <>
      {error && (
        <h3 style={{ color: '#cd0200', textAlign: 'center' }}>
          Uh-oh! {error.message}
        </h3>
      )}
      <form onSubmit={handleCreateTrip}>
        <div style={{ display: 'flex' }}>
          <input type="text" {...bindTripTitle} />
          <Button style={{ minWidth: 200 }} type="submit">
            Create Trip
          </Button>
        </div>
        <div>
          <Checkbox label="Covid test was negative" {...bindCovidCheck} />
        </div>
      </form>
    </>
  );
};

export default CreateTripForm;
