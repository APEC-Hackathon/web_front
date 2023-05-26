/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collaboration } from '../models/Collaboration';
import type { CollaborationCreate } from '../models/CollaborationCreate';
import type { CollaborationUpdate } from '../models/CollaborationUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollaborationService {

    /**
     * Read My Collaborations
     * Retrieve my collaborations.
     * @param skip
     * @param limit
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static readMyCollaborationsApiV1CollaborationGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Collaboration>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Collaboration
     * Create new collaboration.
     * @param requestBody
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static createCollaborationApiV1CollaborationPost(
        requestBody: CollaborationCreate,
    ): CancelablePromise<Collaboration> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/collaboration/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Collaboration By Id
     * Get a collaboration by ID.
     * @param collaborationId
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static readCollaborationByIdApiV1CollaborationCollaborationIdGet(
        collaborationId: number,
    ): CancelablePromise<Collaboration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/{collaboration_id}',
            path: {
                'collaboration_id': collaborationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update My Collaboration
     * Update a collaboration.
     * @param collaborationId
     * @param requestBody
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static updateMyCollaborationApiV1CollaborationCollaborationIdPut(
        collaborationId: number,
        requestBody: CollaborationUpdate,
    ): CancelablePromise<Collaboration> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/collaboration/{collaboration_id}',
            path: {
                'collaboration_id': collaborationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Collaboration
     * Delete a collaboration.
     * @param collaborationId
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static deleteCollaborationApiV1CollaborationCollaborationIdDelete(
        collaborationId: number,
    ): CancelablePromise<Collaboration> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/collaboration/{collaboration_id}',
            path: {
                'collaboration_id': collaborationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read All Collaborations
     * Get all collaborations.
     * @param skip
     * @param limit
     * @returns Collaboration Successful Response
     * @throws ApiError
     */
    public static readAllCollaborationsApiV1CollaborationFeedGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Collaboration>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/feed/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
