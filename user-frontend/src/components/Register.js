import React, { useState } from 'react';
import API from '../services/api'; // Adjust the import path as needed
import '../styles/Register.css'; // Adjust the path based on your project structure


function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Insert registration logic here
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Register</h2>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="input"
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input"
                />
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}

export default Register;
