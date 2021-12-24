import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import classNames from "classnames";

function Header({ toggleSidebar, shrink }) {
  return (
    <div
      className={classNames("header d-flex align-items-center position-fixed", {
        "header-shrinked": shrink,
        "header-unshrinked": !shrink,
      })}
    >
      <FontAwesomeIcon
        className="ps-2"
        icon={faSlidersH}
        onClick={toggleSidebar}
        size="2x"
      />
    </div>
  );
}

export default Header;
