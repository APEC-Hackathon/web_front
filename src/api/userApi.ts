import {OpenAPI, ProfileService} from "../client";

const authApi = {
    getUserById: (userId: number) => {
        OpenAPI.BASE = "http://172.104.229.42:8000"
        return ProfileService.readUserByIdApiV1ProfileUserIdGet(userId)
    }
}

export default authApi