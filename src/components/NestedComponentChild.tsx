import { useUserContext } from 'contexts/UserContext';
import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const NestedComponentChild = () => {
  const { setUser, user } = useUserContext();
  const darkTheme = useTheme();

  useEffect(() => {
    setUser({ name: 'John Doe 789' });
  }, []);

  return (
    <div style={{ backgroundColor: darkTheme ? '#333' : '#ccc' }}>
      <p>{JSON.stringify(user)}</p>
      Nested Child
    </div>
  );
};

export default NestedComponentChild;
