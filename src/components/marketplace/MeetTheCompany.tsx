import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface Company {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
}

interface MeetTheCompanyProps {
    companyId: number | undefined
}

const MeetTheCompany = ({ companyId }: MeetTheCompanyProps) => {
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const response = await fetch(`your-backend-url/companies/${companyId}`);
                const data = await response.json();
                setCompany(data);
            } catch (error) {
                console.error("Error fetching company details:", error);
            }
        };

        fetchCompanyDetails();
    }, [companyId]);

    if (!company) {
        return <div>Loading company details...</div>;
    }

    return (
        <div>
            <Typography variant="h4">{company.name}</Typography>
            <img src={company.image} alt={company.name} />
            <Typography variant="body1">{company.description}</Typography>
            <Typography variant="body2">Location: {company.location}</Typography>
        </div>
    );
};

export default MeetTheCompany;
