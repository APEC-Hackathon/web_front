import { ProfileService} from "../client";
import { setBaseURL } from "./utils";

const authApi = {
    getUserById: (userId: number) => {
        setBaseURL()
        return ProfileService.readUserByIdApiV1ProfileUserIdGet(userId)
    }
}

export default authApi