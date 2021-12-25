import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import classNames from "classnames";
import "./HeaderMobile.scss"

function HeaderMobile({ toggleSidebar }) {
  return (
    <div
      className={classNames("header-mobile d-flex align-items-center position-fixed")}
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

export default HeaderMobile;
