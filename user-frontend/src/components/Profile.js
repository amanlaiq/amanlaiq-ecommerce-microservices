import React, { useState, useEffect } from 'react';
import API from '../services/api'; // Assuming your API setup is in the services folder

function Profile() {
    const [user, setUser] = useState({ name: '', email: '' });
    const [isEditing, setEditing] = useState(false);

    // Function to fetch the user profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await API.get('/users/profile');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error.response.data);
            }
        };

        fetchProfile();
    }, []);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    // Submit updated profile
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await API.put('/users/profile', user);
            setUser(response.data);
            setEditing(false);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error.response.data);
        }
    };

    return (
        <div>
            <h1>User Profile</h1>
            {!isEditing ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => setEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={() => setEditing(false)}>Cancel</button>
                </form>
            )}
        </div>
    );
}

export default Profile;
