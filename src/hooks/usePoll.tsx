import { useEffect, useRef } from "react";

export default function usePoll(callback: () => void, delay: number) {
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

    if (delay !== null) {
      const interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [callback, delay]);
}
