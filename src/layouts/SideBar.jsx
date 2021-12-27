import classNames from "classnames";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { NAVBAR_MODE, SideNavBarItems } from "../NavBarConstants";
import LOGO from "../styles/images/whatsapp.svg";
import "./SideBar.scss";
import SideBarOverlay from "./SideBarOverlay";

function SideBar({ shrink, toggleSidebar }) {
  return (
    <div
      className={classNames("side-bar h-100 position-fixed", {
        "shrink-sidebar": shrink && NAVBAR_MODE === 1,
        unshrink: !shrink && NAVBAR_MODE === 1,
      })}
    >
      <div className="d-flex justify-content-center align-items-center sidebar-logo">
        <Link to="/">
          <img src={LOGO} className="logo" alt="logo" />
        </Link>
      </div>

      {NAVBAR_MODE === 1 && (
        <div className="side-menu-items">
          <Nav className={classNames("d-block")}>
            {SideNavBarItems.map((item) => (
              <MenuItem
                key={item.path}
                item={item}
                shrink={shrink}
                exapandParent={true}
              />
            ))}
          </Nav>
        </div>
      )}
      {NAVBAR_MODE === 2 && (
        <SideBarOverlay shrink={shrink} toggleSidebar={toggleSidebar} />
      )}
    </div>
  );
}

export default SideBar;
