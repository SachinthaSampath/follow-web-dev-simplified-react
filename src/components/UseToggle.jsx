import React, { useState } from 'react';
import { useToggle } from '../hooks/useToggle';

const UseToggle = () => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div>
      <p>{toggle.toString()}</p>
      <button onClick={() => {setToggle()}}>Toggle</button>
      <button onClick={() => {setToggle(true)}}>Make True</button>
      <button onClick={() => {setToggle(false)}}>Make False</button>
    </div>
  );
};

export default UseToggle;
