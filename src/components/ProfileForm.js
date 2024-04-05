import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import JoblyApi from '../services/JoblyApi';

function ProfileForm() {
    const { currentUser, setCurrentUser } = useUser();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        // include other fields as per your user model
    });

    useEffect(() => {
        // Initialize form with current user data
        setFormData(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await JoblyApi.updateProfile(currentUser.username, formData);
            setCurrentUser(updatedUser); // Update global user state
            alert("Profile updated successfully.");
        } catch (err) {
            console.error("Failed to update profile", err);
            alert("Failed to update profile.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            {/* Include other fields as necessary */}
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default ProfileForm;
