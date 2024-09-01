import { useCallback, useRef, useState } from 'react';

export default function useStateWithHistory(
  defaultValue, // take a default value
  { capacity = 10 } = {}
) {
  // set the default value
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v) => {
      const resolvedValue = typeof v === 'function' ? v(value) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        // has this changed? so then we want to delete everything after pointer
        // delete all state we no longer need
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }

        historyRef.current.push(resolvedValue);

        // check whether beyond capacity
        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }

        // update the pointer to current index
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value]
  );

  // make the pointer go back and forth
  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}
