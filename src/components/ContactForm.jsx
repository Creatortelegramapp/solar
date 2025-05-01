import { useState } from 'react';
import { theme } from '../constants/constants.js';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{
        width: '100%',
        background: '#25D0B9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '10px',
        height: '60vh',
    }}>
        <div style={{
            width: '50%',
            background: 'transparent',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }}>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column',
                gap:"20px"
            }}>
                <h2 style={{
                    color: "white",
                    fontSize: '50px',
                    fontWeight: 'bold',
                }}>
                    CONTACT FORM
                </h2>
                <input
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        height: '30px',
                        border: '2px solid #fff',
                        backgroundColor: 'transparent',
                    }}
                />
                <input
                    type="email"
                    placeholder="enter your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        height: '30px',
                        marginBottom: '10px',
                        border: '2px solid #fff',
                        backgroundColor: 'transparent',
                    }}
                />
                <button
                    style={{
                        backgroundColor: '#fff',
                        color: "white",
                        padding: '10px 20px',
                        border: '2px solid #fff',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        background: 'transparent',

                    }}
                >
                    SEND
                </button>
            </div>

            </div>


        <div style={{
            width: '50%',
            background: 'transparent',
            height: '100%',
            display:"flex",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <div style={{
                width: '50%',
            }}>
                <h2 style={{
                    color: "white",
                    fontSize: '50px',
                }}>Lorem ipsum.</h2>
                <p style={{
                    color: 'white',
                    fontSize: '20px',
                }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi debitis iusto optio quo. Repellendus?</p>
                <p style={{
                    color: 'white',
                }}>Lorem.</p>
            </div>

        </div>
        </div>

  );
};

export default ContactForm;