import { ProblemService } from "../client";
import { setHeaders, setBaseURL, setCredentials } from "./utils";



const problemApi = {
  getProblemById: (problemId: number) => {
    setHeaders(); setBaseURL(); setCredentials()
    return ProblemService.readProblemByIdApiV1ProblemProblemIdGet(problemId);
  },
  getMyProblems: (skip?: number, limit: number = 100) => {
    setHeaders(); setBaseURL(); setCredentials()
    return ProblemService.readMyProblemsApiV1ProblemGet(skip, limit);
  },
  createProblemBid: (problemId: number, bid: string) => {
    setHeaders(); setBaseURL(); setCredentials()
    return ProblemService.createProblemBidApiV1ProblemBidPost({
      problem_id: problemId,
      description: bid
    });
  }
};

export default problemApi;
