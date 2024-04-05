import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoblyApi from '../services/JoblyApi';

function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
        // Add additional fields as necessary
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted', formData); // Check if this logs when you submit the form
        try {
            await JoblyApi.register(formData);
            navigate('/'); // Redirect to home or another page upon successful signup
            // Optionally set user context here if managing user state
        } catch (err) {
            console.error("Signup failed: ", err);
            // Handle errors, e.g., display a message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Add additional fields as necessary */}
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;
