import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import problemApi from '../../api/problemApi';
import { Problem } from '../../client';
import BasicSearchBar from "../../components/marketplace/BasicSearchBar";
import PostMediaPlayer from "../../components/marketplace/PostMediaPlayer";
import PostTextDataDisplay from "../../components/marketplace/PostTextDataDisplay";
import CollaborationSource from "../../components/marketplace/CollaborationSource";
import MeetTheCompany from "../../components/marketplace/MeetTheCompany";

const ProblemDetailsPage: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [problem, setProblem] = useState<Problem | null>(null);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                if (id) {
                    const response = await problemApi.getProblemById(parseInt(id));
                    setProblem(response);
                }
            } catch (error) {
                console.error('Error fetching problem:', error);
            }
        };

        fetchProblem();
    }, [id]);

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <BasicSearchBar/>
            <PostMediaPlayer/> // I need to input the problem id here
            <PostTextDataDisplay postData={problem}/>
            <CollaborationSource/> // Need to input the problem id here too
            <MeetTheCompany/> // I need to input the company id here
        </div>
    );
};

export default ProblemDetailsPage;


