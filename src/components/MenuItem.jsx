import classNames from "classnames";
import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuItem.scss";
import MenuItemNoState from "./MenuItemNoState";
import NavLinkContent from "./NavLinkContent";

function MenuItem({ item, shrink, exapandParent = false }) {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand(!expand);
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
                <NavLinkContent item={item} shrink={shrink} expand={expand} />
              </Nav.Link>
            )}
            {!item.path && (
              <>
                <NavLinkContent item={item} shrink={shrink} expand={expand} />
              </>
            )}
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
