/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_api_v1_auth_login_post } from '../models/Body_login_api_v1_auth_login_post';
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import type { UserCreate } from '../models/UserCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login
     * OAuth2 compatible token login, get an access token for future requests
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginApiV1AuthLoginPost(
        formData: Body_login_api_v1_auth_login_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: 'http://139.162.139.182/api/v1/auth/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create User Signup
     * Create new user without the need to be logged in
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static createUserSignupApiV1AuthSignupPost(
        requestBody: UserCreate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: 'http://139.162.139.182/api/v1/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
