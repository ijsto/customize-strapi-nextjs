const MrDonaldDuck = ({ trips }) => {
  const isLastOne = trips[0]?.slug?.includes('last-one');

  return (
    <div
      style={{ position: 'fixed', right: 256, textAlign: 'right', top: 128 }}
    >
      {(!trips?.length || trips?.length <= 3) && (
        <div>
          <img
            alt="Donald is ready for a trip."
            src="/img/happy-donald.png"
            height="200px"
          />
          <p>Hi-yo-uw, my name Donald, I like you!</p>
        </div>
      )}

      {trips?.length > 3 && trips?.length <= 5 && (
        <div>
          <img
            alt="Donald is a bit tired and grumpy."
            src="/img/upset-donald.png"
            height="200px"
          />
          <p>That's a lot of walking, man!</p>
        </div>
      )}

      {!isLastOne && trips?.length > 5 && (
        <div>
          <img
            alt="Donald is bouncing around in outrage."
            src="/img/outraged-donald.png"
            height="230px"
          />
          <p>STAWP ALREADY!</p>
        </div>
      )}

      {isLastOne && (
        <div>
          <img
            alt="Donald is smiling and ready for food."
            src="/img/satisfied-donald.png"
            height="250px"
          />
          <p>Awkay, glad I could help!</p>
        </div>
      )}
    </div>
  );
};

export default MrDonaldDuck;
