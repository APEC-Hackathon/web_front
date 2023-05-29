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
    getAllCollaborations: (skip?: number, limit: number = 100) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readAllCollaborationsApiV1CollaborationFeedGet(skip, limit)
    },
    createCollaboration: (title: string, description: string, source_id: number, image_url: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.createCollaborationApiV1CollaborationPost({
            title: title,
            description: description,
            source_id: source_id,
            image_url: image_url
        })
    },
    updateCollaboration: (collaborationId: number, title: string, description: string, source_id: number, image_url: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.updateMyCollaborationApiV1CollaborationCollaborationIdPut(collaborationId, {
            title: title,
            description: description,
            source_id: source_id,
            image_url: image_url
        })
    },
    deleteCollaboration: (collaborationId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.deleteCollaborationApiV1CollaborationCollaborationIdDelete(collaborationId)
    },
    createCollaborationRequest: (collaborationId: number, bid: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.createCollaborationRequestApiV1CollaborationRequestPost(
            {
                collaboration_id: collaborationId,
                description: bid
            }
        )
    },
    getCollaborationRequestById: (collaborationRequestId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readCollaborationRequestByIdApiV1CollaborationRequestCollaborationRequestIdGet(collaborationRequestId)
    },
    getMyCollaborationRequests: (skip?: number, limit: number = 100) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readMyCollaborationRequestsApiV1CollaborationMyRequestsGet(skip, limit)
    },
    getRequestsForCollaboration: (collaborationId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.readCollaborationRequestsApiV1CollaborationRequestsCollaborationIdGet(collaborationId)
    },
    updateCollaborationRequest: (collaborationRequestId: number, description: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.updateMyCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdPut(
            collaborationRequestId, 
            {
                description: description
            }
        )
    },
    deleteCollaborationRequest: (collaborationRequestId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.deleteCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdDelete(collaborationRequestId)
    },
    acceptCollaborationRequest: (collaborationRequestId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.acceptCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdAcceptPut(collaborationRequestId)
    },
    rejectCollaborationRequest: (collaborationRequestId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return CollaborationService.rejectCollaborationRequestApiV1CollaborationRequestCollaborationRequestIdRejectPut(collaborationRequestId)
    }
}

export default collaborationApi
