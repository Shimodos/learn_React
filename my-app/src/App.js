import logo from './logo.svg';
import './AppApp.css';

function AppApp() {
  return (
    <div className="AppApp">
      <header className="AppApp-header">
        <img src={logo} className="AppApp-logo" alt="logo" />
        <p>
          Edit <code>src/AppApp.js</code> and save to reload.
        </p>
        <a
          className="AppApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppApp;
