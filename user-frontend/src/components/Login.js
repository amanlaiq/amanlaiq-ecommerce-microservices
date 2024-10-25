import React, { useState } from 'react';
import API from '../services/api'; // Assuming your API setup is in the services folder

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await API.post('/users/login', credentials);
            localStorage.setItem('token', response.data.token); // Save the token
            console.log('Login successful:', response.data);
            // Redirect or manage the login state
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
