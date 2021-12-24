import classNames from "classnames";
import React from "react";
import { Nav } from "react-bootstrap";
import MenuItem from "../components/MenuItem";
import IPHONE from "../styles/images/iphone.png";
import LOGO from "../styles/images/whatsapp.svg";
import "./SideBar.scss";

const SideNavBarItems = [
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "Home",
    subItems: [
      {
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test1",
        subItems: [
          {
            path: "/",
            img: IPHONE,
            alt: "sidebar.dashboardAltText",
            title: "dashboard",
          },
          {
            path: "/test3",
            img: IPHONE,
            alt: "sidebar.dashboardAltText",
            title: "Test3",
          },
        ],
      },
      {
        path: "/test4",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test4",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "Notification",
    subItems: [
      {
        path: "/test5",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test5",
      },
      {
        path: "/test6",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test6",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "test6",
    subItems: [
      {
        path: "/test7",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test7",
      },
      {
        path: "/test8",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test8",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "posts",
    subItems: [
      {
        path: "/test9",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test9",
      },
      {
        path: "/test10",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test10",
      },
    ],
  },
];

function SideBar({ shrink }) {
  return (
    <div
      className={classNames("side-bar h-100 position-fixed", {
        "shrink-sidebar": shrink,
        unshrink: !shrink,
      })}
    >
      <div className="sidebar-logo d-flex justify-content-center align-items-center">
        <img src={LOGO} className="logo" alt="logo" />
      </div>

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
    </div>
  );
}

export default SideBar;
