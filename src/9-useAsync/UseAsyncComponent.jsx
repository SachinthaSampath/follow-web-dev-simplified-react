import React from 'react';
import useAsync from './useAsync';

const UseAsyncComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error');
      }, 1000);
    });
  });

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
      <div>Data: {value}</div>
    </div>
  );
};

export default UseAsyncComponent;
