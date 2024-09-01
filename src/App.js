import UseLocalStorageComponent from './0-useLocalStorage/UseLocalStorageComponent';
import UseToggleComponent from './1-useToggle/UseToggleComponent';
import UseFetchComponent from './10-useFetch/UseFetchComponent';
import UseTimeOutComponent from './2-useTimeOut/UseTimeOutComponent';
import UseDebounceComponent from './3-useDebounce/UseDebounceComponent';
import UseUpdateEffectComponent from './4-useUpdateEffect/UseUpdateEffectComponent';
import UseArrayComponent from './5-useArray/UseArrayComponent';
import UsePreviousComponent from './6-usePrevious/UsePreviousComponent';
import UseStateWithHistoryComponent from './7-useStateWithHistory/UseStateWithHistoryComponent';
import UseStorageComponent from './8-useStorage/UseStorageComponent';
import UseAsyncComponent from './9-useAsync/UseAsyncComponent';

function App() {
  return (
    <div className="App">
      <h3>useLocalStorage</h3>
      <UseLocalStorageComponent />

      <h3>useToggle</h3>
      <UseToggleComponent />

      <h3>useTimeOut</h3>
      <UseTimeOutComponent />

      <h3>useDebounce</h3>
      <UseDebounceComponent />

      <h3>useUpdateEffect</h3>
      <UseUpdateEffectComponent />

      <h3>useArray</h3>
      <UseArrayComponent />

      <h3>usePrevious</h3>
      <UsePreviousComponent />

      <h3>useStateWithHistory</h3>
      <UseStateWithHistoryComponent />

      <h3>useStorage</h3>
      <UseStorageComponent />

      <h3>useAsync</h3>
      <UseAsyncComponent />

      <h3>useFetch</h3>
      <UseFetchComponent />
    </div>
  );
}

export default App;
