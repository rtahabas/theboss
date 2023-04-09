import { ROUTES_ID } from "./routes-id";

export const routes = [
  {
    id: ROUTES_ID.login,
    path: "/login",
    title: "Login",
    modulePath: "./pages/login/Login",
  },
  {
    id: ROUTES_ID.signup,
    path: "/signup",
    title: "Signup",
    modulePath: "./pages/signup/Signup",
  },
  {
    id: ROUTES_ID.dashboard,
    path: "/",
    title: "Dashboard",
    modulePath: "./pages/dashboard/Dashboard",
  },
  {
    id: ROUTES_ID.create,
    path: "/create",
    title: "Create",
    modulePath: "./pages/create/Create",
  },
  {
    id: ROUTES_ID.projects,
    path: "/projects/:id",
    title: "Projects",
    modulePath: "./pages/project/Project",
  },
];
