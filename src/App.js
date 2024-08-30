import { useEffect, useState } from 'react';
import UseDebounce from './components/UseDebounce';
import UseLocalStorage from './components/UseLocalStorage';
import UseTimeOut from './components/UseTimeOut';
import UseToggle from './components/UseToggle';
import UseUpdateEffect from './components/UseUpdateEffect';
import UseArray from './components/UseArray';

function App() {
  return (
    <div className="App">
      {/* <UseLocalStorage /> */}
      {/* <UseToggle /> */}
      {/* <UseTimeOut/> */}
      {/* <UseDebounce /> */}
      {/* <UseUpdateEffect /> */}
      <UseArray />
    </div>
  );
}

export default App;
