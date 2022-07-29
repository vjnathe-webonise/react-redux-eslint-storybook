import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = lazy(() => import('../App'));
const Login = lazy(() => import('../components/Login'));
const Dashboard = lazy(() => import('../components/Dashboard'));
const UserList = lazy(() => import('../components/User/UserList'));
const UserDetails = lazy(() => import('../components/User/UserDetails'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <App />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="user"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <UserList />
              </Suspense>
            }
          />
          <Route
            path="user/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <UserDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
