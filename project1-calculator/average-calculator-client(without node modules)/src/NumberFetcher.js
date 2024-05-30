// src/NumberFetcher.js
import React, { useState } from 'react';
import axios from 'axios';

const NumberFetcher = () => {
  const [type, setType] = useState('e');
  const [data, setData] = useState(null);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${type}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
      setData(null);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      {data && (
        <div>
          <h2>Results</h2>
          <p><strong>Previous State:</strong> {JSON.stringify(data.windowPrevState)}</p>
          <p><strong>Current State:</strong> {JSON.stringify(data.windowCurrState)}</p>
          <p><strong>Numbers:</strong> {JSON.stringify(data.numbers)}</p>
          <p><strong>Average:</strong> {data.avg}</p>
        </div>
      )}
    </div>
  );
};

export default NumberFetcher;
