import { CollaborationService } from "../client";
import { setHeaders, setBaseURL, setCredentials } from "./utils";

const collaborationApi = {
    getCollaborationById: (collaborationId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readCollaborationByIdApiV1CollaborationCollaborationIdGet(collaborationId)
    },
    getMyCollaborations: (skip?: number, limit: number = 100) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readMyCollaborationsApiV1CollaborationGet(skip, limit)
    },
    createCollaborationBid: (collaborationId: number, bid: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.createCollaborationRequestApiV1CollaborationRequestPost(
            {
                collaboration_id: collaborationId,
                description: bid
            }
        )
    }
}

export default collaborationApi