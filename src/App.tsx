import React from 'react';
import { useEffect } from 'react';
import NestedComponentParent from './components/NestedComponentParent';
import { ThemeProvider } from './contexts/ThemeContext';
import { useUserContext } from './contexts/UserContext';

function App() {
  const { setUser, user } = useUserContext();
  useEffect(() => {
    // setUser({ name: 'John Doe 123' });
  }, []);
  return (
    <ThemeProvider>
      <div className="App">
        <p>{JSON.stringify(user)}</p>
        <NestedComponentParent />
      </div>
    </ThemeProvider>
  );
}

export default App;
