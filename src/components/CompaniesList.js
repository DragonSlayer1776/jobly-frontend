import React, { useState, useEffect } from 'react';
import JoblyApi from '../services/JoblyApi';
import CompanyCard from './CompanyCard';

function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function fetchCompanies() {
            const fetchedCompanies = await JoblyApi.getCompanies();
            setCompanies(fetchedCompanies);
        }

        fetchCompanies();
    }, []);

    return (
        <div className="card-container">
            {companies.map(company => (
                <CompanyCard key={company.id} company={company} />
            ))}
        </div>
    );
}

export default CompaniesList;