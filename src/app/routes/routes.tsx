import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingScreen from '@/components/feature/loading-screen/Loading-screen';
import { routesConfig } from './config';
import { RouteWrapper, MainLayoutWrapper } from './route-wrapper';

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayoutWrapper>
              <Outlet />
            </MainLayoutWrapper>
          }
        >
          {routesConfig.public.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={<RouteWrapper component={component} />}
            />
          ))}
        </Route>
        {routesConfig.auth.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWrapper component={component} />}
          />
        ))}
        {routesConfig.protected.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWrapper component={component} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
