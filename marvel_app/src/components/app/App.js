import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainePage, ComicsPage } from '../pages';
import AppHeader from '../appHeader/AppHeader';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path={'/'} element={<MainePage />} />
            <Route path={'/comics'} element={<ComicsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
