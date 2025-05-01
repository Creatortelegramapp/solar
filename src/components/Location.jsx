import { theme } from '../constants/constants.js';

const Location = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '400px',
    }}>
      <h2 style={{
        color: theme.colors.mainColor,
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        OUR LOCATION
      </h2>
      <p style={{
        color: '#666',
        fontSize: '14px',
        marginBottom: '10px',
      }}>
        28 JACKSON BVD STE 1020<br />
        CHICAGO IL 60604-2340
      </p>
      <p style={{
        color: '#666',
        fontSize: '14px',
        marginBottom: '20px',
      }}>
        info@demolink.org
      </p>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
      }}>
        <a href="https://facebook.com"><img src="facebook-icon-url" alt="Facebook" style={{ width: '24px', height: '24px' }} /></a>
        <a href="https://twitter.com"><img src="twitter-icon-url" alt="Twitter" style={{ width: '24px', height: '24px' }} /></a>
        <a href="https://linkedin.com"><img src="linkedin-icon-url" alt="LinkedIn" style={{ width: '24px', height: '24px' }} /></a>
      </div>
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#ccc', // Placeholder for Google Maps
      }}>
        {/* Replace with actual Google Maps embed */}
      </div>
    </div>
  );
};

export default Location;