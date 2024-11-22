import { Routes, Route, createRoutesFromElements } from "react-router-dom";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router  = createBrowserRouter(
        createRoutesFromElements(
                <>
                        <Route path="/" element={<Login />} />
                        {homeRoutes.map((route) => (
                                <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<HeaderLayout>{route.children}</HeaderLayout>}
                                />
                        ))}
                </>
        )
);


