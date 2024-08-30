import React from 'react';
import NestedComponentChild from './NestedComponentChild';
import { useThemeUpdate } from '../contexts/ThemeContext';

const NestedComponentParent = () => {
  const toggleTheme = useThemeUpdate();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Nested Parent</p>
      <NestedComponentChild />
    </div>
  );
};

export default NestedComponentParent;
