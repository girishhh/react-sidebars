import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuItem.scss";
import MenuItemNoState from "./MenuItemNoState";

function MenuItem({ item, shrink, exapandParent = false }) {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand(!expand);
  const navLinkContent = () => {
    return (
      <>
        <img
          src={item.img}
          alt={item.alt}
          className={classNames({
            "side-bar-icon": !shrink,
            "side-bar-icon-shrinked": shrink,
          })}
        />
        <span className={classNames({ "d-none": shrink })}>{item.title}</span>
        {item.subItems && expand && (
          <FontAwesomeIcon className="pe-2" icon={faArrowUp} size="1x" />
        )}
        {item.subItems && !expand && (
          <FontAwesomeIcon className="pe-2" icon={faArrowDown} size="1x" />
        )}
      </>
    );
  };
  return (
    <>
      {exapandParent && (
        <>
          <NavItem
            key={item.path}
            className={classNames("mb-3 menu-item align-self-start")}
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
