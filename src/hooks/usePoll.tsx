import { useEffect, useRef } from 'react';

export default function usePoll(callback: () => void, delay = 5000) {
  const callbackRef = useRef<() => void>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (callbackRef.current !== undefined) {
        callbackRef.current();
      }
    }

    if (delay) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [callback, delay]);
}
