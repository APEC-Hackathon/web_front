import {AuthService, Body_login_api_v1_auth_login_post, ProfileService, UserCreate} from "../client";
import { setBaseURL, setHeaders, setCredentials } from "./utils";

const authApi = {
    signup: (requestBody: UserCreate) => {
        setBaseURL()
        return AuthService.createUserSignupApiV1AuthSignupPost(requestBody)
    },
    login: (formData: Body_login_api_v1_auth_login_post) => {
        setBaseURL()
        return AuthService.loginApiV1AuthLoginPost(formData)
    },
    verifyToken: () => {
        setBaseURL(); setHeaders(); setCredentials()
        return ProfileService.readUsersMeApiV1ProfileMeGet()
    },
    logout: () => {
        localStorage.removeItem('token')
    }
}

export default authApi