import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
