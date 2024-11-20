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

// export default router;





// export const Router = () => {
//   return (
// //     <LoginUserProvider>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {homeRoutes.map((route) => (
//           <Route
//             key={route.path}
//             path={route.path}
//             element={<HeaderLayout>{route.children}</HeaderLayout>}
//           />
//         ))}
//         <Route path="*" element={<Page404 />} />
//       </Routes>
// //     </LoginUserProvider>
//   );
// };



// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import { Login } from "../components/pages/login/Login";
// import { Login } from '../components/pages/Login';
// import { homeRoutes } from "./HomeRoutes";
// import { Page404 } from "../components/pages/Page404";
// import { HeaderLayout } from "../components/templates/HeaderLayout";
// // import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";

// export const Router = () => {
//         return (
//                 // <LoginUserProvider>
//                         <Routes>
//                                 {/* Login Route */}
//                                 <Route path="/" element={<Login />} />

//                                 {/* Home Routes with HeaderLayout */}
//                                 {/* <Route path="/home" element={<HeaderLayout />}> */}
//                                         {homeRoutes.map(route => (
//                                                 <Route
//                                                         key={route.path}
//                                                         path={route.path}
//                                                         element={route.element}
//                                                 />
//                                         ))}
//                                 {/* </Route> */}

//                                 {/* 404 Page */}
//                                 <Route path="*" element={<Page404 />} />
//                         </Routes>
//                 // </LoginUserProvider>
//         );
// };



// -------------------------------------

// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { memo } from 'react';
// import { Login } from '../components/pages/Login';
// import { Home } from '../components/pages/Home';
// import { Setting } from '../components/pages/Setting';
// import { UserManagement } from '@/components/pages/UserManagement';
// import { Page404 } from '@/components/pages/Page404';
// import App from '../App.tsx';

// import {
//         BrowserRouter,
//         createBrowserRouter,
//         RouterProvider,
//         Route,
//         Routes,
//         Link,
//         createRoutesFromElements,
// } from "react-router-dom";

