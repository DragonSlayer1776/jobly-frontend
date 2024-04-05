import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import JoblyApi from '../services/JoblyApi';

function JobCard({ job }) {
    const { currentUser } = useUser();
    const [applied, setApplied] = useState(false);

    const handleApply = async () => {
        if (currentUser && !applied) {
            try {
                await JoblyApi.applyToJob(currentUser.username, job.id);
                setApplied(true); // Update the state to reflect the application
            } catch (err) {
                console.error("Failed to apply to job", err);
            }
        }
    };

    return (
        <div className="card">
            <h2>{job.title}</h2>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
        </div>
    );
}

export default JobCard;
