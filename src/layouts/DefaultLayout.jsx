import classNames from "classnames";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./DefaultLayout.scss";
import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
  const [shrink, setShrink] = useState(false);
  const toggleSidebar = () => {
    setShrink(!shrink);
  };
  return (
    <Row className="h-100 mx-0 default-layout">
      <Col md={classNames({0: shrink, 2: !shrink})} className={classNames("px-0",{"shrink-sidebar": shrink,"unshrink": !shrink})}>
        <SideBar />
      </Col>
      <Col className="px-0">
        <Header toggleSidebar={toggleSidebar} />
        {children}
      </Col>
    </Row>
  );
}

export default DefaultLayout;
