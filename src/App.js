import { useEffect, useState } from 'react';
import UseDebounce from './components/UseDebounce';
import UseLocalStorage from './components/UseLocalStorage';
import UseTimeOut from './components/UseTimeOut';
import UseToggle from './components/UseToggle';
import UseUpdateEffect from './components/UseUpdateEffect';
import UseArray from './components/UseArray';
import UsePreviousComponent from './6-usePrevious/UsePreviousComponent';
import UseStateWithHistoryComponent from './7-useStateWithHistory/UseStateWithHistoryComponent';

function App() {
  return (
    <div className="App">
      {/* <UseLocalStorage /> */}
      {/* <UseToggle /> */}
      {/* <UseTimeOut/> */}
      {/* <UseDebounce /> */}
      {/* <UseUpdateEffect /> */}
      {/* <UseArray /> */}
      {/* <UsePreviousComponent /> */}
      <UseStateWithHistoryComponent />
    </div>
  );
}

export default App;
