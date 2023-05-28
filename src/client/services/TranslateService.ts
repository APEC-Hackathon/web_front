/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TranslateService {

    /**
     * Get Message Translated
     * Translate a message to a target language
     * @param text
     * @param targetLang
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMessageTranslatedApiV1TranslateGet(
        text: string,
        targetLang: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/translate/',
            query: {
                'text': text,
                'target_lang': targetLang,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
