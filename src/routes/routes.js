import React from "react";
import { ROUTES_ID } from "./routes-id";

export const routes = [
  {
    id: ROUTES_ID.login,
    path: "/login",
    title: "Login",
    modulePath: React.lazy(() => import("pages/login/Login")),
  },
  {
    id: ROUTES_ID.signup,
    path: "/signup",
    title: "Signup",
    modulePath: React.lazy(() => import("pages/signup/Signup")),
  },
  {
    id: ROUTES_ID.dashboard,
    path: "/",
    title: "Dashboard",
    modulePath: React.lazy(() => import("pages/dashboard/Dashboard")),
  },
  {
    id: ROUTES_ID.create,
    path: "/create",
    title: "Create",
    modulePath: React.lazy(() => import("pages/create/Create")),
  },
  {
    id: ROUTES_ID.projects,
    path: "/projects/:id",
    title: "Projects",
    modulePath: React.lazy(() => import("pages/project/Project")),
  },
];
