import { Routes, Route } from 'react-router-dom';

import Home from '@pages/dashboard/Home';

import NotFound from '@pages/error/NotFound';

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
