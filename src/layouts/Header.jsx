import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleSidebar }) {
  return (
    <div className="header d-flex align-items-center">
      <FontAwesomeIcon  className="ps-2" icon={faSlidersH} onClick={toggleSidebar} size="2x" />
    </div>
  );
}

export default Header;
