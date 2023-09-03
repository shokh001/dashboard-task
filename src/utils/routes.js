import React from "react";
import Document from "pages/Document";
import Employees from "pages/Employees";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Tasks from "pages/Tasks";
import UserInfo from "pages/UserInfo";
import UserKPI from "pages/UserKPI";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Settings from "pages/Settings";

const routes = [
    {
        element: <Document />,
        title: "Document",
        path: "/document",
    },
    {
        element: <Employees />,
        title: "Employees",
        path: "/employees",
    },
    {
        element: <Tasks />,
        title: "Tasks",
        path: "/tasks",
    },
    {
        element: <UserInfo />,
        title: "User info",
        path: "/userinfo",
    },
    {
        element: <UserKPI />,
        title: "User KPI",
        path: "/userKPI",
    },
    {
        element: <Settings />,
        title: "Settings",
        path: "/settings",
    },
]

export const GuestRoutes = createBrowserRouter([
    {
        element: <SignUp />,
        title: "Sign Up",
        path: "/signup",
    },
    {
        element: <SignIn />,
        title: "Sign In",
        path: "/signin",
    },
    {
        path: "*",
        element: <Navigate to="/signup" replace />,
    }
]);

export const AccessRoutes = createBrowserRouter([
    {
        path: "*",
        element: <h1>NOT A FOUND PAGE</h1>,
    },
    {
        path: "/",
        element: <Navigate to="/document" replace />,
    },
    {
        path: '/',
        element: <Layout />,
        children: routes
    }   
]);