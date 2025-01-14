import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [queryParams, setQueryParams] = useState({});
  const [redirectUri, setRedirectUri] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParamsObj = {};
    params.forEach((value, key) => {
      queryParamsObj[key] = value;
    });
    setQueryParams(queryParamsObj);
    setRedirectUri(params.get('redirect_uri') || '');
  }, []);

  const handleRedirect = () => {
    if (redirectUri) {
      window.location.href = redirectUri;
    }
  };

  return (
    <>
      <div>
        <h1>Evergent POC</h1>
        <h3>MetaData information</h3>
        <ul>
          {Object.entries(queryParams).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        {redirectUri && (
          <button onClick={handleRedirect}>Redirect</button>
        )}
      </div>
    </>
  )
}

export default App
