import {useRef} from 'react'

export function useDebounce(expensiveFunction, delay) {
  let timeoutRef = useRef(null);
  let arr = [];
  function delayFunction() {
    clearTimeInterval();
    timeoutRef.current = setTimeout(expensiveFunction, delay);
  }

  function clearTimeInterval() {
    if(timeoutRef.current)
    clearTimeout(timeoutRef.current);
  }
  return { delayFunction, clearTimeInterval };
}
