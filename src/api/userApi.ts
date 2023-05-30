import { ProfileService} from "../client";
import {setBaseURL, setCredentials, setHeaders} from "./utils";

const authApi = {
    getUserById: (userId: number) => {
        setBaseURL(); setHeaders()
        return ProfileService.readUserByIdApiV1ProfileUserIdGet(userId)
    },
    getAllUsers: () => {
        setBaseURL(); setHeaders(); setCredentials()
        return ProfileService.getAllUserApiV1ProfileAllGet()
    },
    getMe: () => {
        setBaseURL(); setHeaders(); setCredentials()
        return ProfileService.readUsersMeApiV1ProfileMeGet()
    }
}

export default authApi