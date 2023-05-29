/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Problem } from '../models/Problem';
import type { ProblemBid } from '../models/ProblemBid';
import type { ProblemBidCreate } from '../models/ProblemBidCreate';
import type { ProblemBidUpdate } from '../models/ProblemBidUpdate';
import type { ProblemCreate } from '../models/ProblemCreate';
import type { ProblemUpdate } from '../models/ProblemUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProblemService {

    /**
     * Read My Problems
     * Retrieve my Problems.
     * @param skip
     * @param limit
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static readMyProblemsApiV1ProblemGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Problem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/',
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
     * Create Problem
     * Create new Problem.
     * @param requestBody
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static createProblemApiV1ProblemPost(
        requestBody: ProblemCreate,
    ): CancelablePromise<Problem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/problem/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Problem By Id
     * Get a Problem by ID.
     * @param problemId
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static readProblemByIdApiV1ProblemProblemIdGet(
        problemId: number,
    ): CancelablePromise<Problem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/{problem_id}',
            path: {
                'problem_id': problemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update My Problem
     * Update a Problem (Can be used to choose the winner).
     * @param problemId
     * @param requestBody
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static updateMyProblemApiV1ProblemProblemIdPut(
        problemId: number,
        requestBody: ProblemUpdate,
    ): CancelablePromise<Problem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/problem/{problem_id}',
            path: {
                'problem_id': problemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Problem
     * Delete a problem.
     * @param problemId
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static deleteProblemApiV1ProblemProblemIdDelete(
        problemId: number,
    ): CancelablePromise<Problem> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/problem/{problem_id}',
            path: {
                'problem_id': problemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read All Problems
     * Get all problems.
     * @param skip
     * @param limit
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static readAllProblemsApiV1ProblemFeedGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Problem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/feed/',
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
     * Create Problem Bid
     * Create new ProblemBid.
     * @param requestBody
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static createProblemBidApiV1ProblemBidPost(
        requestBody: ProblemBidCreate,
    ): CancelablePromise<ProblemBid> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/problem/bid',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Problem Bid By Id
     * Get a ProblemBid by ID.
     * @param problemBidId
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static readProblemBidByIdApiV1ProblemBidProblemBidIdGet(
        problemBidId: number,
    ): CancelablePromise<ProblemBid> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/bid/{problem_bid_id}',
            path: {
                'problem_bid_id': problemBidId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update My Problem Bid
     * Update a ProblemBid.
     * @param problemBidId
     * @param requestBody
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static updateMyProblemBidApiV1ProblemBidProblemBidIdPut(
        problemBidId: number,
        requestBody: ProblemBidUpdate,
    ): CancelablePromise<ProblemBid> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/problem/bid/{problem_bid_id}',
            path: {
                'problem_bid_id': problemBidId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Problem Bid
     * Delete a problem_bid.
     * @param problemBidId
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static deleteProblemBidApiV1ProblemBidProblemBidIdDelete(
        problemBidId: number,
    ): CancelablePromise<ProblemBid> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/problem/bid/{problem_bid_id}',
            path: {
                'problem_bid_id': problemBidId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read My Problem Bids
     * Retrieve my ProblemBids.
     * @param skip
     * @param limit
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static readMyProblemBidsApiV1ProblemMyBidsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<ProblemBid>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/my-bids/',
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
     * Read All Bids For A Problem
     * Retrieve ProblemBids for a Problem.
     * @param problemId
     * @returns ProblemBid Successful Response
     * @throws ApiError
     */
    public static readAllBidsForAProblemApiV1ProblemBidsProblemIdGet(
        problemId: number,
    ): CancelablePromise<Array<ProblemBid>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/problem/bids/{problem_id}',
            path: {
                'problem_id': problemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Choose Winner For Problem
     * Choose winner for a Problem.
     * @param problemId
     * @param problemBidWinnerId
     * @returns Problem Successful Response
     * @throws ApiError
     */
    public static chooseWinnerForProblemApiV1ProblemProblemIdAnnouncePost(
        problemId: number,
        problemBidWinnerId: number,
    ): CancelablePromise<Problem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/problem/{problem_id}/announce',
            path: {
                'problem_id': problemId,
            },
            query: {
                'problem_bid_winner_id': problemBidWinnerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
