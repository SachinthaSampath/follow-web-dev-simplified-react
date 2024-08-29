import { useState } from 'react';

function calculateInit() {
  console.log('calculateInit');
  return 0;
}

function App() {
  const [initialValue, setInitialValue] = useState(() => {
    console.log('initialValue in function');
    return 0;
  });
  const [reCalculate, setReCalculate] = useState(calculateInit());

  const [demoObject, setDemoObject] = useState({ count: 4, theme: 'blue' });

  const [state, setState] = useState({ count: 4, theme: 'blue' });

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((prev) => count - 1);
          setState((prev) => ({ ...prev, count: prev.count - 1 }));
        }}
      >
        -
      </button>
      <span>
        {state?.count ?? ''} {state?.theme ?? ''}
      </span>
      <button
        onClick={() => {
          setCount((prev) => count + 1);
          setState((prev) => ({ ...prev, count: prev.count + 1 }));
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
