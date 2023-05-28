import {AuthService, Body_login_api_v1_auth_login_post, OpenAPI, ProfileService, UserCreate} from "../client";

const authApi = {
    signup: (requestBody: UserCreate) => {
        OpenAPI.BASE = "http://172.104.229.42:8000"
        return AuthService.createUserSignupApiV1AuthSignupPost(requestBody)
    },
    login: (formData: Body_login_api_v1_auth_login_post) => {
        OpenAPI.BASE = "http://172.104.229.42:8000"
        return AuthService.loginApiV1AuthLoginPost(formData)
    },
    verifyToken: () => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return ProfileService.readUsersMeApiV1ProfileMeGet()
    },
    logout: () => {
        localStorage.removeItem('token')
    }
}

export default authApi