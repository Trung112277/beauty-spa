import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export function useRouteLoading(delay = 500) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [location, delay]);

  return loading;
} 