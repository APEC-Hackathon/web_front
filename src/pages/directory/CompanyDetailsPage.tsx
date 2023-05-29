import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompanyMediaPlayer from "../../components/directory/CompanyMediaPlayer";
import CompanyTextDataDisplay from "../../components/directory/CompanyTextDataDisplay";
import CompanyProblems from "../../components/directory/CompanyProblems";
import CompanyCollaborations from "../../components/directory/CompanyCollaborations";
import userApi from "../../api/userApi";
import {User} from "../../client";

const CompanyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchCollaboration = async () => {
            try {
                if (id) {
                    const user = await userApi.getUserById(parseInt(id)); // Parse id as a number
                    setUser(user);
                }
            } catch (error) {
                console.error('Error fetching collaboration:', error);
            }
        };

        fetchCollaboration();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <CompanyMediaPlayer userMedia={user.avatar_url!}/>
            <CompanyTextDataDisplay userData={user}/>
            <CompanyProblems userId={user.id!}/>
            <CompanyCollaborations userId={user.id!}/>
        </div>
    );
};

export default CompanyDetailsPage;
