import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';
import ErrorBoundary from './components/error-boundry/error-boundry';

import SwapiService from './services/swapi-service';
import { SwapiServiceProvider } from './components/swapi-serwice-contex/swapi-serwice-contex';

import PeoplePage from './components/pages/people-page';
import PlanetPage from './components/pages/planet-page';
import StarshipPage from './components/pages/starship-page';
import StarshipDetails from './components/sw-components/starship-ditails';
import LoginPage from './components/pages/login-page';
import SecretPage from './components/pages/secret-page';

import './app.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  swapiService = new SwapiService();

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />

              <Routes>
                <Route path={'/'} element={<h2>Welcome to StarDB</h2>} />
                <Route path={'*'} element={<h2>This page does not exist</h2>} />
                <Route
                  path={'/people/:id?'}
                  element={
                    <>
                      <h2>People</h2>
                      <PeoplePage />
                    </>
                  }
                />
                <Route
                  path={'/planets'}
                  element={
                    <>
                      <h2>Planets</h2>
                      <PlanetPage />
                    </>
                  }
                />
                <Route
                  path={'/starships'}
                  element={
                    <>
                      <h2>Starships</h2>
                      <StarshipPage />
                    </>
                  }
                />
                <Route path={'/starships/:id'} element={<StarshipDetails />} />
                <Route
                  path={'/login'}
                  element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />}
                />
                <Route path={'/secret'} element={<SecretPage isLoggedIn={isLoggedIn} />} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
