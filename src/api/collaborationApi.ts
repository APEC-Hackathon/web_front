import { CollaborationService } from "../client";

const collaborationApi = {
    getCollaborationById: (collaborationId: number) => {
        return CollaborationService.readCollaborationByIdApiV1CollaborationCollaborationIdGet(collaborationId)
    }
}

export default collaborationApi