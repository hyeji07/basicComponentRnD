import { BrowserRouter } from 'react-router-dom';
import AppRoute from '@routes/Route';

import '@assets/css/resetStyle.scss';
import '@styles/globalStyle.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
