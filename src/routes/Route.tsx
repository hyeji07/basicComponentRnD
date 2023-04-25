import { Routes, Route } from 'react-router-dom';

import LayoutDefault from '@layout/LayoutDefault';
import Home from '@pages/Home';
/* import NotFound from '@pages/error/NotFound'; */

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}
