import { AppRoutes } from './routes';
import LoadingScreen from '@/components/common/LoadingScreen';
import { useRouteLoading } from '@/hooks/useRouteLoading';

export function App() {
  const loading = useRouteLoading();

  return (
    <>
      {loading && <LoadingScreen />}
      <AppRoutes />
    </>
  );
}

export default App;
