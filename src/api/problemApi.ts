import { ProblemService } from "../client";

const problemApi = {
    getProblemById: (problemId: number) => {
        return ProblemService.readProblemByIdApiV1ProblemProblemIdGet(problemId)
    }
}

export default problemApi