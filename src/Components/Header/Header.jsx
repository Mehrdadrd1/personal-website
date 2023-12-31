import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <Heading as={"h1"}>Front End Developing With 'MehrdadR'</Heading>
      </div>
      <nav className="HeaderNav">
        <div className="pages-card">
          <ul>
            <li>
              <Link to={`/`}>About</Link>
            </li>
            <li>
              <Link to={`/project`}>Projects</Link>
            </li>
            <li>
              <Link to={`/contact`}>Connection Ways</Link>
            </li>
          </ul>
        </div>
        <div className="user-card">
          <ul>
            <li>
              <Link to={`/login`}>Log in</Link>
            </li>
            <li>
              <Link to={`/registration`}>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
