import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

function WithLayout({ component: Component, ...rest }) {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default WithLayout;
