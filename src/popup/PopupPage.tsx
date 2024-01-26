import React, {useState, useEffect} from 'react';

export const Popup: React.FC = () => {
    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f9f9f9', // light gray background for the popup
            color: '#333', // dark gray color for text for better readability
            fontFamily: 'Arial, sans-serif', // a common, clean font-family
            borderRadius: '8px', // slightly rounded corners for a modern look
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // subtle shadow for depth
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px', // space between header and the rest of the content
        },
        logo: {
            width: '80px', // logo width as provided
        },
        title: {
            margin: 0, // remove default margin from h1
            color: '#1DA1F2', // Twitter's blue color for the title to match branding
        },
        description: {
            margin: 0, // remove default margin from paragraph
            fontStyle: 'italic', // italicize the description
        },
        input: {
            width: '100%', // full width input
            padding: '10px', // comfortable padding for typing
            fontSize: '16px', // reasonably large font size for legibility
            border: '1px solid #ddd', // subtle border
            borderRadius: '4px', // rounded corners for the input box
            marginTop: '10px', // space above the input box
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalKey(e.target.value)
        chrome.storage.local.set({ apiKey: e.target.value})
    }

    const [localKey, setLocalKey] = useState<string>('')

    useEffect(() => {
        chrome.storage.local.get(['apiKey'], (result) => {
            const {apiKey} = result
            setLocalKey(apiKey)
        })
    }, [])

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div>
                    <h1 style={styles.title}>{chrome.runtime.getManifest().name}</h1>
                    <p style={styles.description}>({chrome.runtime.getManifest().description})</p>
                </div>
                <img style={styles.logo} src="assets/logoTweet.png" alt="Logo" />
            </div>
            <input
                style={styles.input}
                type="text"
                value={localKey}
                placeholder="Add OpenAI Key"
                onChange={onChange}
            />
        </div>
    );
};
