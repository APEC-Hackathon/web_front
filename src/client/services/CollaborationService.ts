/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collaboration } from '../models/Collaboration';
import type { CollaborationCreate } from '../models/CollaborationCreate';
import type { CollaborationRequest } from '../models/CollaborationRequest';
import type { CollaborationRequestCreate } from '../models/CollaborationRequestCreate';
import type { CollaborationRequestUpdate } from '../models/CollaborationRequestUpdate';
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

    /**
     * Create Collaboration Request
     * Create new CollaborationRequest.
     * @param requestBody
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static createCollaborationRequestApiV1CollaborationRequestPost(
        requestBody: CollaborationRequestCreate,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/collaboration/request',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Collaboration Request By Id
     * Get a CollaborationRequest by ID.
     * @param collaborationRequestId
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static readCollaborationRequestByIdApiV1CollaborationRequestCollaborationRequestIdGet(
        collaborationRequestId: number,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/request/{collaboration_request_id}',
            path: {
                'collaboration_request_id': collaborationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update My Collaboration Request
     * Update a CollaborationRequest.
     * @param collaborationRequestId
     * @param requestBody
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static updateMyCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdPut(
        collaborationRequestId: number,
        requestBody: CollaborationRequestUpdate,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/collaboration/request/{collaboration_request_id}',
            path: {
                'collaboration_request_id': collaborationRequestId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Collaboration Request
     * Delete a CollaborationRequest.
     * @param collaborationRequestId
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static deleteCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdDelete(
        collaborationRequestId: number,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/collaboration/request/{collaboration_request_id}',
            path: {
                'collaboration_request_id': collaborationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read My Collaboration Requests
     * Retrieve my CollaborationRequests.
     * @param skip
     * @param limit
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static readMyCollaborationRequestsApiV1CollaborationMyRequestsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<CollaborationRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/my-requests/',
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
     * Read Collaboration Requests
     * Retrieve CollaborationRequests for a Collaboration.
     * @param collaborationId
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static readCollaborationRequestsApiV1CollaborationRequestsCollaborationIdGet(
        collaborationId: number,
    ): CancelablePromise<Array<CollaborationRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/collaboration/requests/{collaboration_id}',
            path: {
                'collaboration_id': collaborationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Accept Collaboration Request
     * Accept a CollaborationRequest.
     * @param collaborationRequestId
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static acceptCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdAcceptPut(
        collaborationRequestId: number,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/collaboration/request/{collaboration_request_id}/accept',
            path: {
                'collaboration_request_id': collaborationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reject Collaboration Request
     * Reject a CollaborationRequest.
     * @param collaborationRequestId
     * @returns CollaborationRequest Successful Response
     * @throws ApiError
     */
    public static rejectCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdRejectPut(
        collaborationRequestId: number,
    ): CancelablePromise<CollaborationRequest> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/collaboration/request/{collaboration_request_id}/reject',
            path: {
                'collaboration_request_id': collaborationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
