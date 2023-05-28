/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreate = {
    email: string;
    full_name?: string;
    is_superuser?: boolean;
    prefered_language?: string;
    organization_name?: string;
    organization_description?: string;
    organization_rating?: number;
    country?: string;
    avatar_url?: string;
    password: string;
};

