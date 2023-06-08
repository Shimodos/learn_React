import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="#ffab40 orange accent-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food App
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
