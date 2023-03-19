import { ROUTES_ID } from "./routes-id";

export const routes = [
  {
    id: ROUTES_ID.login,
    path: "/login",
    title: "Login",
    modulePath: "/login/Login",
  },
  {
    id: ROUTES_ID.signup,
    path: "/signup",
    title: "Signup",
    modulePath: "/signup/Signup",
  },
  {
    id: ROUTES_ID.dashboard,
    path: "/",
    title: "Dashboard",
    modulePath: "/dashboard/Dashboard",
  },
  {
    id: ROUTES_ID.create,
    path: "/create",
    title: "Create",
    modulePath: "/create/Create",
  },
  {
    id: ROUTES_ID.projects,
    path: "/projects/:id",
    title: "Projects",
    modulePath: "/project/Project",
  },
];
