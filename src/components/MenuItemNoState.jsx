import classNames from "classnames";
import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuItemNoState({ item, shrink, exapandParent }) {
  return (
    <>
      {exapandParent && (
        <NavItem key={item.path} className="menu-item py-2">
          <Nav.Link as={Link} to={item.path} className="p-0">
            <div className="d-flex">
              <Col
                md="3"
                lg="2"
                className="d-flex align-items-center justify-content-end justify-content-md-start"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className={classNames({
                    "side-bar-icon": !shrink,
                    "side-bar-icon-shrinked": shrink,
                  })}
                />
              </Col>
              <Col xs="1" className="d-flex align-items-center">
                <span className={classNames({ "d-md-none": shrink })}>
                  {item.title}
                </span>
              </Col>
            </div>
          </Nav.Link>
        </NavItem>
      )}
    </>
  );
}

export default MenuItemNoState;
