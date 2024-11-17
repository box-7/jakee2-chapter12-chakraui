

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '@/components/pages/UserManagement';

export const Router: React.FC = memo(() => {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={ <Login />} />
                                <Route path="/setting" element={<Setting />} />
                                <Route path="/usermanagement" element={<UserManagement />} />
                        </Routes>
                </BrowserRouter>
        )
});




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


