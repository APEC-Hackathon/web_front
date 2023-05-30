import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import collaborationApi from '../../api/collaborationApi';
import {Collaboration} from "../../client";
import BasicSearchBar from "../../components/marketplace/BasicSearchBar";
import PostTextDataDisplay from "../../components/marketplace/PostTextDataDisplay";
import PostMediaPlayer from "../../components/marketplace/PostMediaPlayer";
import CollaborationSource from "../../components/marketplace/CollaborationSource";
import MeetTheCompany from "../../components/marketplace/MeetTheCompany";


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
            <BasicSearchBar type={"collaboration"}/>
            <PostMediaPlayer/>
            <PostTextDataDisplay postData={collaboration} type={"collaboration"}/>
            <CollaborationSource sourceId={collaboration.source_id}/>
            <MeetTheCompany companyId={collaboration.owner_id}/>
        </div>
    );
};

export default CollaborationDetailsPage;
