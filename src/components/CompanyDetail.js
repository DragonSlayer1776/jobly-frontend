import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../services/JoblyApi';

function CompanyDetail() {
    const { companyName } = useParams(); // Get company handle or ID from URL
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const fetchedCompany = await JoblyApi.getCompany(companyName); // Fetch company details from API
            setCompany(fetchedCompany);
        }
        getCompany();
    }, [companyName]);

    if (!company) return <div>Loading...</div>;

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {/* Display more company details and jobs here */}
        </div>
    );
}

export default CompanyDetail;