import Card from './dataDisplay/Card';

const TripList = ({ trips }) => {
  return trips?.map(trip => (
    <Card key={trip.id}>
      <h3>{trip.title}</h3>
      <b>{trip.traveller?.username || 'Unknown traveller'}</b>

      <div>{trip.body}</div>
    </Card>
  ));
};

export default TripList;
