import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const NestedComponentChild = () => {
  const darkTheme = useTheme();
  return <div style={{ backgroundColor: darkTheme ? '#333' : '#ccc' }}>Nested Child</div>;
};

export default NestedComponentChild;
