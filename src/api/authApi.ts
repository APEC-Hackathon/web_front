import { AuthService, Body_login_api_v1_auth_login_post, UserCreate} from "../client";

const authApi = {
  signup: (requestBody: UserCreate) => {
    return AuthService.createUserSignupApiV1AuthSignupPost(requestBody)
  },
  login: (formData: Body_login_api_v1_auth_login_post) => {
    return AuthService.loginApiV1AuthLoginPost(formData)
  }
  // Verify Token?
}

export default authApi