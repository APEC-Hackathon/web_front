import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import collaborationApi from '../../api/collaborationApi';
import {Collaboration} from "../../client";


const CollaborationDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [collaboration, setCollaboration] = useState<Collaboration | null>(null);

    useEffect(() => {
        const fetchCollaboration = async () => {
            try {
                if (id) {
                    const collaboration = await collaborationApi.getCollaborationById(parseInt(id)); // Parse id as a number
                    setCollaboration(collaboration);
                }
            } catch (error) {
                console.error('Error fetching collaboration:', error);
            }
        };

        fetchCollaboration();
    }, [id]);

    if (!collaboration) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{collaboration.title}</h2>
            <p>{collaboration.description}</p>
            {/* Render other details of the collaboration */}
        </div>
    );
};

export default CollaborationDetailsPage;
