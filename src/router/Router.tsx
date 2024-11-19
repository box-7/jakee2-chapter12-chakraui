
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '@/components/pages/UserManagement';
import { Page404 } from '@/components/pages/Page404';
import App from '../App.tsx';

import {
        BrowserRouter,
        createBrowserRouter,
        RouterProvider,
        Route,
        Routes,
        Link,
        createRoutesFromElements,
} from "react-router-dom";



export const router  = createBrowserRouter([
        {
                path: '/',
                element: <Login />,
        },
        {
                path: '/home',
                element: <Home />,
        },
        {
                path: '/home/setting',
                element: <Setting />,
        },
        {
                path: '/user_management',
                element: <UserManagement />,
        },
        {
                path: '*',
                element: <Page404 />,
        },
]);

export default router;



// const router = createBrowserRouter(
//         createRoutesFromElements(
//                 <Route path="/" element={<App />}>
//                         {/* <Route element={<Home />} /> */}
//                         <Route path="login" element={<Login />} />
//                         <Route path="home" element={<Home />}>
//                                 <Route path="setting" element={<Setting />} />
//                         </Route>
//                         <Route path="user_management" element={<UserManagement />} />
//                 </Route>
//         )
// );

// const router = createBrowserRouter(
//         createRoutesFromElements(
//                 <Route path="/" element={<Login />}>
//                         <Route path="home" element={<Home />} >
//                                 <Route path="setting" element={<Setting />} />
//                         </Route>
//                 </Route>
//         )
// );








// import { match } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
// import { homeRoutes } from './router/HomeRoutes.tsx';

// export const Router: React.FC = memo(() => {
//         return (
//                 <BrowserRouter>
//                         <Routes>
//                                 <Route path="/" element={ <Login />} />


//                                 <Route path="/home" element={<Home />}>
//                                 {/* homeRoutes を使ってさらにネストさせる */}
//                                         <Routes>
//                                                 {homeRoutes.map((route) => (
//                                                 <Route
//                                                         key={route.path}
//                                                         path={`${url.pathname}${route.path}`}
//                                                         element={route.children}
//                                                 />
//                                                 ))}
//                                         </Routes>
//                                 </Route>
//                         </Routes>
//                 </BrowserRouter>
//         )
// });


// {/* <Route path="/home" element={<Home />} />
// <Route path="/setting" element={<Setting />} />
// <Route path="/usermanagement" element={<UserManagement />} /> */}
// {/* <Route path="/home" render={({ match: url }) => (
//         // <Switch>
//                 {homeRoutes.map((route) => (
//                         <Route
//                                 key={route.path}
//                                 exact={route.exact}
//                                 path={`${url}${route.path}`}
//                                 element={route.children}
//                         />
//                 ))}
//         // </Switch>
// )
// } */}



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


