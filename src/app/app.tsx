import { AppRoutes } from './routes';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import LoadingScreen from '@/components/common/LoadingScreen';

export function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      <AppRoutes />
    </>
  );
}

export default App;
