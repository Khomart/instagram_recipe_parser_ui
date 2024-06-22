// src/components/LandingPage/LandingPage.tsx
import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('google_token');

    try {
      const response = await fetch('http://localhost:8080/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ url: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Instagram Parser</h1>
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
    </div>
  );
};

export default LandingPage;
