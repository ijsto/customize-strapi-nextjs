import Cookies from 'js-cookie';
import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

import FIRST_QY from '../api/queries/FIRST_QY';
import Authentication from '../components/dataEntry/Authentication';

import TripList from '../components/TripList';
import MrDonaldDuck from '../components/MrDonaldDuck';
import CreateTripForm from '../components/CreateTripForm';

const App = () => {
  const [token, setToken] = useState(null);

  const { data, loading, error } = useQuery(FIRST_QY, {
    onError(err) {
      // eslint-disable-next-line no-console
      console.log('onError :: err', err);
    },
  });

  useEffect(() => {
    setToken(Cookies.get('jwt'));
  }, []);

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  const trips = data?.trips ?? [];

  return (
    <>
      <div style={{ margin: '0 auto', maxWidth: 600 }}>
        {!loading && <MrDonaldDuck trips={trips} />}

        <h1 style={{ textAlign: 'center' }}>Donald, get crisps!</h1>

        {!token && <Authentication />}

        <CreateTripForm />

        {trips?.length > 0 && (
          <h2 style={{ textAlign: 'center' }}>Existing Trips</h2>
        )}
        <TripList trips={trips} />
      </div>
    </>
  );
};

export default App;
