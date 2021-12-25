import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuItem.scss";
import MenuItemNoState from "./MenuItemNoState";

function MenuItem({ item, shrink, exapandParent = false }) {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand(!expand);
  const navLinkContent = () => {
    return (
      <div className="d-flex">
        <Col md="3" lg="2" className="d-flex align-items-center justify-content-end justify-content-md-start">
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
        <Col className="d-flex align-items-center justify-content-end">
          {item.subItems && expand && (
            <FontAwesomeIcon
              className="pe-2 float-end"
              icon={faArrowUp}
              size="1x"
            />
          )}
          {item.subItems && !expand && (
            <FontAwesomeIcon
              className="pe-2 float-end"
              icon={faArrowDown}
              size="1x"
            />
          )}
        </Col>
      </div>
    );
  };
  return (
    <>
      {exapandParent && (
        <>
          <NavItem
            key={item.path}
            className={classNames("menu-item py-2")}
            onClick={toggleExpand}
          >
            {item.path && (
              <Nav.Link as={Link} to={item.path} className="p-0">
                {navLinkContent()}
              </Nav.Link>
            )}
            {!item.path && <>{navLinkContent()}</>}
          </NavItem>
          {item.subItems &&
            item.subItems.map((subItem) => (
              <>
                {!subItem.subItems && (
                  <MenuItemNoState
                    item={subItem}
                    shrink={shrink}
                    exapandParent={expand}
                  />
                )}
                {subItem.subItems && (
                  <MenuItem
                    item={subItem}
                    shrink={shrink}
                    exapandParent={expand}
                  />
                )}
              </>
            ))}
        </>
      )}
    </>
  );
}

export default MenuItem;
