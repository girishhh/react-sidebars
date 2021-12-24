import classNames from "classnames";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout(props) {
  const [shrink, setShrink] = useState(false);
  const toggleSidebar = () => {
    setShrink(!shrink);
  };
  return (
    <div className="h-100 mx-0 default-layout">
      <div className={classNames("px-0")}>
        <SideBar shrink={shrink} />
      </div>
      <div className="px-0">
        <Header toggleSidebar={toggleSidebar} shrink={shrink} />
        <main
          className={classNames({
            "main-shrinked": shrink,
            "main-unshrinked": !shrink,
          })}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
