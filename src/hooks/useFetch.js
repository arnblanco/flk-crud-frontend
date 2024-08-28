import { useState, useEffect } from "react";

const baseURL = 'http://localhost:8000';

export const useFetch = ({ method = 'GET', url, data = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
        };

        if (method === 'POST' || method === 'PUT') {
          options.body = JSON.stringify(data);
        }

        const res = await fetch(`${baseURL}${url}`, options);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setResponse(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, data]);

  return { response, error, loading };
};
