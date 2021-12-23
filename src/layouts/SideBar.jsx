import "./SideBar.scss";
import LOGO from "../styles/images/whatsapp.svg";
import IPHONE from "../styles/images/iphone.png";
import { Nav, NavItem, NavLink } from "react-bootstrap";

const SideNavBarItems = [
  {
    path: "test",
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "sidebar.dashboard",
  },
];

function SideBar() {
  return (
    <div className="side-bar h-100">
      <div className="sidebar-logo d-flex justify-content-center align-items-center">
        <img src={LOGO} className="logo" alt="logo" />
      </div>

      <Nav className="flex-column">
        {SideNavBarItems.map((item) => (
          <NavItem key={item.path} className="mb-3">
            <NavLink
              to={item.path}              
              className="p-0"
            >
              <img src={item.img} alt={item.alt} className="side-bar-icon" />
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

export default SideBar;
