import React, { useState } from 'react';
import API from '../services/api'; // Adjust the import path as needed

function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await API.post('/users/register', user);
            console.log('Registration successful:', response.data);
            // Redirect or handle next steps
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
