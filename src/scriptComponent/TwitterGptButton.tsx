import React, { useState } from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';
import { chatGpt } from '../modules/chatGpt';

const { TextArea } = Input;


export const TwitterGptButton: React.FC = () => {
  const [twitterInput, setTwitterInput] = useState(false);
  const [contextText, setContextText] = useState('');

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


  const writeTweet = () => {
    console.log('Writing Tweet ' + contextText)
    chatGpt(contextText, setContextText)
  }

  const contextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContextText(e.target.value); 
  }

  return (
    <>
      <div role="presentation" className="css-175oi2r r-6b64d0 r-cpa5s6">
        <Modal
          title="Add Context"
          centered
          open={twitterInput}
          onOk={writeTweet}
          onCancel={() => setTwitterInput(false)}
          okText={'Write Tweet'}
        >
          <TextArea value={contextText} onChange={contextChange} rows={8} placeholder='Enter Context' />
        </Modal>
        <button style={buttonStyle} onClick={() => setTwitterInput(true)}>
          TweetGPT
        </button>
      </div>
    </>
  )
}