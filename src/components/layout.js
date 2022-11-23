import { Outlet, Link } from "react-router-dom";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
          <li>
            <Link to="/bored">Bored</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
