import Card from './dataDisplay/Card';

const TripList = ({ trips }) => {
  return trips?.map(trip => (
    <Card key={trip.id}>
      <h3>{trip.title}</h3>
      <b>{trip.slug || 'No slug'}</b>
      <div>
        <i>{trip.traveller?.email || 'Unknown traveller'}</i>
      </div>
      <div>{trip.body}</div>
    </Card>
  ));
};

export default TripList;
