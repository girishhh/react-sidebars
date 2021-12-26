import classNames from "classnames";
import React from "react";
import { Nav } from "react-bootstrap";
import MenuItem from "../components/MenuItem";
import { SideNavBarItems } from "../NavBarConstants";
import LOGO from "../styles/images/whatsapp.svg";
import "./SideBar.scss";
import "./SideBarMobile.scss";


function SideBarMobile({ shrink, toggleSidebar }) {
  return (
    <div className={classNames("side-bar-mobile position-fixed")}>
      <div className="sidebar-logo d-flex justify-content-center align-items-center">
        <img src={LOGO} className="logo" alt="logo" />
      </div>
      {shrink && (
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
    </div>
  );
}

export default SideBarMobile;
