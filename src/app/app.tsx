
import LoadingScreen from '@/components/feature/loading-screen/Loading-screen';
import { useRouteLoading } from '@/hooks/useRouteLoading';
import { AppRoutes } from './routes/routes';

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
