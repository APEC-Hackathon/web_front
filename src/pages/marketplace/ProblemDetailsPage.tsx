import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import problemApi from '../../api/problemApi';
import { Problem } from '../../client';

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
            <h2>{problem.title}</h2>
            <p>{problem.description}</p>
            {/* Render other details of the problem */}
        </div>
    );
};

export default ProblemDetailsPage;


