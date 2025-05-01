import { theme } from '../constants/constants.js';

const EventCard = ({  date, location }) => {
  return (
    <div style={{
      width: '100%',
    }}>

      <div style={{
        // padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        fontSize: '30px',
        color: 'white',
      }}>
        <div style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'end',
        }}>
          <p style={{
            marginBottom: '5px',
            border:"2px white solid",
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: '30%',
          }}>
            {date}
          </p>
        </div>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'start',
        }}>
          <p style={{
            color: 'gold',
            fontSize: '30px',
          }}>
            {location}
          </p>

        </div>



      </div>
    </div>
  );
};

export default EventCard;