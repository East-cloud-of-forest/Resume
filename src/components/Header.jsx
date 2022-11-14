import { NavLink } from "react-router-dom";
import "../style/Header.scss";
import { Button } from "./Common";

const Header = () => {
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
        <Button white circle width="37px">
          달
        </Button>
      </div>
    </div>
  );
};

export default Header;
