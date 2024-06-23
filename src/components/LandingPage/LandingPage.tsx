// src/components/LandingPage/LandingPage.tsx
import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const validateURL = (url: string) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-zA-Z\\d_]*)?$' // fragment locator
    );

    if (!urlPattern.test(url) || !url.includes('instagram.com')) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateURL(inputValue)) {
      setError('Please enter a valid Instagram URL.');
      return;
    }

    setError('');
    setIsLoading(true);
    const token = localStorage.getItem('google_token');

    try {
      const response = await fetch('http://your-backend-url/api/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ URL: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        setResult(data.data); // Display the data from the response
      } else {
        console.error('Error:', response.statusText);
        setError('Failed to process URL.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Instagram Parser</h1>
      {error && <p className="error">{error}</p>}
      <input
        className="input"
        type="text"
        placeholder="Enter URL"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <div className="spinner"></div> : 'Send'}
      </button>
      {result && <div className="result-box">{result}</div>}
    </div>
  );
};

export default LandingPage;
