import React, { useState } from 'react';
import API from '../services/api'; // Ensure this path is correct based on your project structure

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }
        try {
            const response = await API.post('/users/login', { email, password });
            localStorage.setItem('token', response.data.token); // Store the token in localStorage
            setError(''); // Clear any errors
            console.log('Login successful:', response.data); // Optional: Redirect or update UI
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Failed to login:', error.response.data);
                setError(error.response.data.message || 'Failed to login');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response:', error.request);
                setError('No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
                setError('Error during request setup');
            }
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Login</h2>
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="input"
                />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default Login;
