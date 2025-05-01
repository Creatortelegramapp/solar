import { useState } from 'react';
import { theme } from '../constants/constants.js';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div style={{
      backgroundColor: '#4ee3b7',
      textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap:"15px",
        height: '30vh',
        width: '100%',
    }}>
      <h2 style={{
        color: "white",
        textShadow: '5px 0.2px 10px black',
        fontSize: '34px',
        fontWeight: '900',
        marginBottom: '10px',
      }}>
        NEWSLETTER SIGN-UP
      </h2>
      <p style={{
        color: 'white',
        marginBottom: '20px',
          textShadow: '5px 0.2px 10px black',
          fontSize: '24px',
      }}>
        Subscribe to our newsletter to receive exclusive offers and the latest news.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        maxWidth: '500px',
        margin: '0 auto',
          width: '100%',
      }}>
        <input
          type="email"
          placeholder="enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
              width:"100%",
            padding: '10px',
              height: '40px',
            border: '2px solid white',
            borderRadius: '4px',
              backgroundColor: 'transparent',

            flex: 1,
          }}
        />
        <button
          style={{
            backgroundColor: '#fff',
            color: theme.colors.mainColor,
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Newsletter;