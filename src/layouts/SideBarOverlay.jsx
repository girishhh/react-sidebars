import classNames from "classnames";
import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import MenuItem from "../components/MenuItem";
import { SideNavBarItems } from "../NavBarConstants";

function SideBarOverlay({ shrink, toggleSidebar }) {
  const [show, setShow] = useState(false);
  const handleClose = () => toggleSidebar();

  return (
    <>
      <Offcanvas show={shrink} onHide={handleClose}>
        <Offcanvas.Header closeButton />        
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBarOverlay;
