import { useRef } from "react";

export const useDebounced = (delay = 500) => {
  const timeoutRef = useRef(null);

  const debouncedCallback = (callback, ...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
