import React from 'react';

export const TwitterGptButton:React.FC = () => {
  const buttonStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none'
  };

  return (
    <>
        <div role="presentation" className="css-175oi2r r-6b64d0 r-cpa5s6">
          <button style={buttonStyle}>
            TweetGPT
          </button>
      </div>
    </>
  )
}