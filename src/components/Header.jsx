import { NavLink } from "react-router-dom";
import "../style/Header.scss";
import { Button } from "./Common";

const Header = ({ setDark, dark }) => {
  return (
    <div className="Header">
      <div className="inner">
        <nav>
          <NavLink to="/" activeclassname="true">
            resume
          </NavLink>
          <NavLink to="/project" activeclassname="true">
            project
          </NavLink>
        </nav>
        <Button white circle width="37px" onClick={()=>{setDark(!dark)}}>
          {dark?'🌗':'🌓'}
        </Button>
      </div>
    </div>
  );
};

export default Header;
