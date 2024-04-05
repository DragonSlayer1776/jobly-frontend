import React, { useEffect, useState } from 'react';
import JoblyApi from '../services/JoblyApi';
import JobCard from './JobCard';

function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const jobsData = await JoblyApi.getJobs();
            setJobs(jobsData);
        }

        fetchJobs();
    }, []);

    return (
        <div>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobsList;
