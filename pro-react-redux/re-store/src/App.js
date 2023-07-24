import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBundery from './components/error-boundery/error-boundery';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import store from './store';
import HomePage from './components/pages/home-page';
import CardPage from './components/pages/card-page';
import ShopHeader from './components/shop-header/shop-header';
import ShoppingCartTable from './components/shopping-cart-table/shopping-cart-table';

const bookstoreService = new BookstoreService();

const App = () => {
  return (
    <ErrorBundery>
      <Provider store={store}>
        <Router>
          <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <BookstoreServiceProvider value={bookstoreService}>
              <div className="App">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/card" element={<CardPage />} />
                </Routes>
              </div>
            </BookstoreServiceProvider>
            <ShoppingCartTable />
          </main>
        </Router>
      </Provider>
    </ErrorBundery>
  );
};

export default App;
