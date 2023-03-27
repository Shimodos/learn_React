import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MainePage, ComicsPage } from '../pages';
import AppHeader from '../appHeader/AppHeader';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path={'/'}>
              <MainePage />
            </Route>
            <Route exact path={'/comics'}>
              <ComicsPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
