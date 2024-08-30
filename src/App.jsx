import NestedComponentParent from './components/NestedComponentParent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NestedComponentParent />
      </div>
    </ThemeProvider>
  );
}

export default App;
