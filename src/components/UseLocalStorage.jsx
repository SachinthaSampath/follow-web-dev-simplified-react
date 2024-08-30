import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UseLocalStorage = () => {
  // manual approach
  const initialValue = 'Hello World';
  const key = 'name';

  //   const [name, setName] = React.useState(() => {
  //     const jsonValue = localStorage.getItem(key);
  //     if (jsonValue) return JSON.parse(jsonValue);
  //     return initialValue;
  //   });
  // this can be used instead of the above code
  //   const [name, setName] = React.useState(initialValue);
  //   useEffect(() => {
  //     const jsonValue = localStorage.getItem(key);
  //     if (jsonValue) setName(JSON.parse(jsonValue));
  //   }, []);
  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(name));
  //   }, [name]);

  // custom hook approach
  const [name, setName] = useLocalStorage(key, initialValue);

  console.log('rendering ', name);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName((prev) => e.target.value)} />
    </div>
  );
};

export default UseLocalStorage;
