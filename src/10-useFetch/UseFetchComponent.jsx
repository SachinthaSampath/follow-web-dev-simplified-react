import React, { useState } from 'react';
import useFetch from './useFetch';

const UseFetchComponent = () => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {},
    [id]
  );

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((prevId) => prevId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {JSON.stringify(error, null, 2)}</div>
      <div>Data: {JSON.stringify(value, null, 2)}</div>
    </div>
  );
};

export default UseFetchComponent;
