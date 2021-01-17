import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('cats');
  const [isLoading, setIsLoading] = useState(true);

  // update the query state
  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=BG0uinTSDtfym4Q3P2REbOkh7wHDqQz3`
      )
      .then((response) => setData(response.data.data))
      .catch((error) => console.log('Error fetching and parsing data', error))
      .finally(() => setIsLoading(false));
  }, [query]); // isLoading and data are being updated within the hook (setState), no need to pass them to the dependency array

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {isLoading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </div>
  );
}

export default App;
