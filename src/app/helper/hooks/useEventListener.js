import { useEffect, useRef } from "react";

export function useEventListener(eventName, handler, element = document) {
  const handlerRef = useRef(null);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
     element.visibilityState
    element.addEventListener(eventName, handlerRef.current);

    return () => {
      element.removeEventListener(eventName, handlerRef.current);
    };
  }, []);
}
