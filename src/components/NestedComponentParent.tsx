import React from 'react';
import NestedComponentChild from './NestedComponentChild';
import { useThemeUpdate } from '../contexts/ThemeContext';
import { useUserContext } from '../contexts/UserContext';

const NestedComponentParent = () => {
  const { setUser, user } = useUserContext();
  React.useEffect(() => {
    // setUser({ name: 'John Doe 456' });
  }, []);

  const toggleTheme = useThemeUpdate();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Nested Parent</p>
      <NestedComponentChild />
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default NestedComponentParent;
