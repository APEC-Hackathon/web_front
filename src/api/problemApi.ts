import {OpenAPI, ProblemService} from "../client";

const problemApi = {
    getProblemById: (problemId: number) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        OpenAPI.CREDENTIALS = "include"
        return ProblemService.readProblemByIdApiV1ProblemProblemIdGet(problemId)
    }
}

export default problemApi