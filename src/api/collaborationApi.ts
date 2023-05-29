import {CollaborationRequestCreate, CollaborationService, OpenAPI} from "../client";

const collaborationApi = {
    getCollaborationById: (collaborationId: number) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return CollaborationService.readCollaborationByIdApiV1CollaborationCollaborationIdGet(collaborationId)
    },
    getMyCollaborations: (skip?: number, limit: number = 100) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return CollaborationService.readMyCollaborationsApiV1CollaborationGet(skip, limit)
    },
    createCollaborationBid: (collaborationId: number, bid: string) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'application/json'
        }
        OpenAPI.BASE = "http://172.104.229.42.8000"
        OpenAPI.CREDENTIALS = "include"
        return CollaborationService.createCollaborationRequestApiV1CollaborationRequestPost(
            {
                collaboration_id: collaborationId,
                description: bid
            }
        )
    }
}

export default collaborationApi