import {CollaborationService, OpenAPI, ProblemService} from "../client";

const problemApi = {
    getProblemById: (problemId: number) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return ProblemService.readProblemByIdApiV1ProblemProblemIdGet(problemId)
    },
    getMyProblems: (skip?: number, limit: number = 100) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return ProblemService.readMyProblemsApiV1ProblemGet(skip, limit)
    },
    createProblemBid: (problemId: number, bid: string) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'application/json'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return ProblemService.createProblemBidApiV1ProblemBidPost(
            {
                problem_id: problemId,
                description: bid
            }
        )
    }
}

export default problemApi