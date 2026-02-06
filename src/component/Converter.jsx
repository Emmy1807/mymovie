// src/components/Converter.js
import React, { useState } from 'react';
import axios from 'axios';

const Converter = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);

  const handleConvert = async () => {
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Extract video ID from URL
      const videoId = extractVideoId(url);
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }

      // For demo purposes - in a real app, you'd call your backend or API
      // Here we're just simulating a conversion
      setTimeout(() => {
        setIsLoading(false);
        setDownloadLink(`https://example-converter-api.com/download/${videoId}`);
        setVideoInfo({
          title: `Converted Video ${videoId}`,
          duration: '3:45'
        });
      }, 2000);
      
      // In a real implementation:
      // const response = await axios.get(`YOUR_API_ENDPOINT?url=${encodeURIComponent(url)}`);
      // setDownloadLink(response.data.downloadLink);
      // setVideoInfo(response.data.videoInfo);
      
    } catch (err) {
      setError(err.message || 'Conversion failed');
      setIsLoading(false);
    }
  };

  const extractVideoId = (url) => {
    // Basic YouTube URL parsing
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="converter-container">
      <h1>YouTube to MP3 Converter</h1>
      
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL here..."
        />
        <button onClick={handleConvert} disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Convert'}
        </button>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      {videoInfo && (
        <div className="video-info">
          <h3>{videoInfo.title}</h3>
          <p>Duration: {videoInfo.duration}</p>
        </div>
      )}
      
      {downloadLink && (
        <div className="download-section">
          <a href={downloadLink} download className="download-btn">
            Download MP3
          </a>
        </div>
      )}
    </div>
  );
};

export default Converter;