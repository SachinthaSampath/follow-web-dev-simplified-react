import { useEffect } from 'react';

export default function useUpdateLogger(value) {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
}
