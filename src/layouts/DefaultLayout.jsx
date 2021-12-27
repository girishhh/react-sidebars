import classNames from "classnames";
import React, { useState } from "react";
import Media from "react-media";
import { Outlet } from "react-router-dom";
import { NAVBAR_MODE } from "../NavBarConstants";
import "./DefaultLayout.scss";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBarMobile";

function DefaultLayout(props) {
  const [shrink, setShrink] = useState(false);
  const toggleSidebar = () => {
    setShrink(!shrink);
  };
  return (
    <div className="h-100 mx-0 default-layout">
      <div className={classNames("px-0")}>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <>
              {matches.medium && (
                <SideBar shrink={shrink} toggleSidebar={toggleSidebar} />
              )}
              {matches.small && (
                <SideBarMobile shrink={shrink} toggleSidebar={toggleSidebar} />
              )}
            </>
          )}
        </Media>
      </div>
      <div className="px-0">
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <>
              {matches.medium && (
                <Header toggleSidebar={toggleSidebar} shrink={shrink} />
              )}
              {matches.small && <HeaderMobile toggleSidebar={toggleSidebar} />}
            </>
          )}
        </Media>
        <main
          className={classNames("d-flex",{
            "main-shrinked": shrink && NAVBAR_MODE === 1,
            "main-unshrinked": !shrink && NAVBAR_MODE === 1,
          })}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
