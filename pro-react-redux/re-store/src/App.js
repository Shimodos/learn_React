import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBundery from './components/error-boundery/error-boundery';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import store from './store';
import HomePage from './components/pages/home-page';
import CardPage from './components/pages/card-page';

const bookstoreService = new BookstoreService();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBundery>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <div className="AppApp">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/card" element={<CardPage />} />
              </Routes>
            </div>
          </Router>
        </BookstoreServiceProvider>
      </ErrorBundery>
    </Provider>
  );
};

export default App;
