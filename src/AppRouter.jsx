import React from "react";
import { Switch, Route } from "react-router-dom";
import { hasArrayElement } from "./utils/array-util";
import { RouteWithRedirections } from "./routes/RouteWithRedirection";
import { Error } from "./pages/error/Error";
import NotFound404 from "./pages/notfound404/NotFound404";
import { Loading } from "@nextui-org/react";

export function AppRouter({ routes, ...props }) {
  const renderRoute = (el) => {
    const PageComp = el.modulePath;
    const nested = hasArrayElement(el.children);
    if (el.notIncludeRedirections) {
      //404, Privacy, Support Ananymous and Login User see at the same time..
      return (
        <Route
          exact={!nested}
          path={el.path}
          key={el.path}
          render={(rProps) => {
            const extendedProps = { routeData: el, ...rProps, ...props };
            return <PageComp {...extendedProps} />;
          }}
        />
      );
    }
    return (
      <RouteWithRedirections
        exact={!nested}
        path={el.path}
        key={el.path}
        render={(rProps) => {
          const extendedProps = { routeData: el, ...rProps, ...props };
          return <PageComp {...extendedProps} />;
        }}
      />
    );
  };

  return (
    <React.Suspense fallback={<Loading type="points" />}>
      <Error fallback={<p>Page Rendering Exception</p>}>
        <Switch>
          {routes.map(renderRoute)}
          <Route path={"*"} key={"404-page"}>
            <NotFound404 />
          </Route>
        </Switch>
      </Error>
    </React.Suspense>
  );
}
