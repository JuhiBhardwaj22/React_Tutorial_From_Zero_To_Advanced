import { useEffect, useState } from "react";

//we can use a timeout before firing a new API call.

//We needed a way to wait a few milliseconds before calling the API —
// We understood something like debounce was needed. Instead of developing it ourselves
//we searched the web and found useDebounce.
function useDebounce(searchTerm, delay) {
  const [debounceValue, setDebounce] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(searchTerm);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  });
  return d;
  ebounceValue;
}
