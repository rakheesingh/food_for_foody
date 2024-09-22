import { useEffect, useState } from "react";

export function useIdle(delay) {
  const [isUseridle, setIsUserIdle] = useState(false);
  useEffect(() => {
    let timeout = null;
    const handleIdle = () => {
      clearInterval(timeout);
      timeout = setTimeout(() => {
        setIsUserIdle(true);
      }, delay);
    };
    document.addEventListener("mousemove", handleIdle);
    document.addEventListener("keypress", handleIdle);

    timeout = setTimeout(() => setIsIdle(true), timeout);

    return () => {
      clearInterval(timeout);
      document.removeEventListener("mousemove", handleIdle);
      document.removeEventListener("keypress", handleIdle);
    };
  }, []);
  return { isUseridle };
}
