import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { Col } from "react-bootstrap";
import { NAVBAR_MODE } from "../NavBarConstants";

function NavLinkContent({ item, shrink, expand }) {
  return (
    <div className="d-flex ps-1">
      <Col
        md="4"
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
        <span
          className={classNames({ "d-md-none": shrink && NAVBAR_MODE === 1 })}
        >
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
}

export default NavLinkContent;
