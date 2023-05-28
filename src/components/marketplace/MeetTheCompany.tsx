import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import userApi from "../../api/userApi";
import {User} from "../../client";

interface MeetTheCompanyProps {
    companyId: number | undefined
}

const MeetTheCompany = ({ companyId }: MeetTheCompanyProps) => {
    const [company, setCompany] = useState<User | null>(null);

    useEffect(() => {
        if (!companyId) {
            return;
        }
        const fetchCompanyDetails = async () => {
            try {
                const user = await userApi.getUserById(companyId)
                setCompany(user);
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
            <Typography variant="h4">Company: {company.organization_name}</Typography>
            {/*<img src={company.image} alt={company.name} />*/}
            <Typography variant="body1">Description: {company.organization_description}</Typography>
            <Typography variant="body2">Location: {company.country}</Typography>
        </div>
    );
};

export default MeetTheCompany;
