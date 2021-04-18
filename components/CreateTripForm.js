import { useMutation } from '@apollo/react-hooks';
import { Controller, useForm } from 'react-hook-form';
import CREATE_TRIP_M from '../api/mutations/CREATE_TRIP_M';
import TRIPS_Q from '../api/queries/TRIPS_Q';
import Button from './common/Button';
import Checkbox from './dataEntry/Checkbox';

const CreateTripForm = () => {
  const { control, handleSubmit, register } = useForm();
  const [createTrip, { error }] = useMutation(CREATE_TRIP_M, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  const handleCreateTrip = async ({ isCovidFree, title }) => {
    await createTrip({
      refetchQueries: [{ query: TRIPS_Q }],
      variables: {
        destination: `Scranton, PA`,
        isCovidFree,
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
      <form onSubmit={handleSubmit(handleCreateTrip)}>
        <div style={{ display: 'flex' }}>
          <input {...register('title')} />
          <Button style={{ minWidth: 200 }} type="submit">
            Create Trip
          </Button>
        </div>

        <Controller
          render={({ field }) => (
            <Checkbox label="Covid test was negative" {...field} />
          )}
          name="example_3"
          value={false}
          control={control}
        />
      </form>
    </>
  );
};

export default CreateTripForm;
