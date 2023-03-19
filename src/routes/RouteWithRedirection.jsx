import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const isOutsideRoute = (route) => {
  return route.path === "/login" || route.path === "/signup";
};

export const RouteWithRedirections = ({ ...rest }) => {
  const { user } = useAuthContext();
  if (user) {
    if (isOutsideRoute(rest)) {
      return <Redirect to="/" />;
    } else {
      return <Route {...rest} />;
    }
  } else {
    if (isOutsideRoute(rest)) {
      return <Route {...rest} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
};
