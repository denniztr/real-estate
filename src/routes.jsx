import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/main-page';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  );
};
