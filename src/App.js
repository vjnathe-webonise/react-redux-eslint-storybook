import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>React boilerplate</h1>
      <Outlet /> {/* This is to render index element in nested routes */}
    </div>
  );
}
