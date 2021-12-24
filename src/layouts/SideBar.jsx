import classNames from "classnames";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import IPHONE from "../styles/images/iphone.png";
import LOGO from "../styles/images/whatsapp.svg";
import "./SideBar.scss";

const SideNavBarItems = [
  {
    path: "/",
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "sidebar.dashboard",
  },
  {
    path: "/notification",
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "sidebar.dashboard",
  },
  {
    path: "/test",
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "sidebar.dashboard",
  },
  {
    path: "/kjkj",
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "sidebar.dashboard",
  },
];

function SideBar({ shrink }) {
  return (
    <div className="side-bar h-100">
      <div className="sidebar-logo d-flex justify-content-center align-items-center">
        <img src={LOGO} className="logo" alt="logo" />
      </div>

      <Nav className={classNames("flex-column", {"align-items-center": shrink})}>
        {SideNavBarItems.map((item) => (
          <NavItem key={item.path} className="mb-3">
            <Nav.Link as={Link}  to={item.path} className="p-0">
              <img src={item.img} alt={item.alt} className="side-bar-icon" />
              <span className={classNames({ "d-none": shrink })}>
                {item.title}
              </span>
            </Nav.Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

export default SideBar;
