/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { MessageCreate } from '../models/MessageCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageService {

    /**
     * Send Message
     * Send a message to another user.
     * @param peerId
     * @param requestBody
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static sendMessageApiV1MessagePeerIdPost(
        peerId: number,
        requestBody: MessageCreate,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/message/{peer_id}/',
            path: {
                'peer_id': peerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Sent Messages
     * Retrieve messages.
     * @param peerId
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static readSentMessagesApiV1MessagePeerIdSentGet(
        peerId: number,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/message/{peer_id}/sent',
            path: {
                'peer_id': peerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Received Messages
     * Retrieve messages.
     * @param peerId
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static readReceivedMessagesApiV1MessagePeerIdReceivedGet(
        peerId: number,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/message/{peer_id}/received',
            path: {
                'peer_id': peerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
