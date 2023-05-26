/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_update_user_me_api_v1_profile_me_put } from '../models/Body_update_user_me_api_v1_profile_me_put';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileService {

    /**
     * Read Users Me
     * Get current user
     * @returns User Successful Response
     * @throws ApiError
     */
    public static readUsersMeApiV1ProfileMeGet(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profile/me',
        });
    }

    /**
     * Update User Me
     * Update current user
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static updateUserMeApiV1ProfileMePut(
        requestBody?: Body_update_user_me_api_v1_profile_me_put,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/profile/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
