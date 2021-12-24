import classNames from "classnames";
import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuItemNoState({ item, shrink, exapandParent }) {
  return (
    <>
      {exapandParent && (
        <NavItem key={item.path} className="mb-3 menu-item align-self-start">
          <Nav.Link as={Link} to={item.path} className="p-0">
            <img
              src={item.img}
              alt={item.alt}
              className={classNames({
                "side-bar-icon": !shrink,
                "side-bar-icon-shrinked": shrink,
              })}
            />
            <span className={classNames({ "d-none": shrink })}>
              {item.title}
            </span>
          </Nav.Link>
        </NavItem>
      )}
    </>
  );
}

export default MenuItemNoState;
