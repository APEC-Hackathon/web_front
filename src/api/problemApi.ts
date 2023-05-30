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
    getAllProblems: (skip?: number, limit: number = 100) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.readAllProblemsApiV1ProblemFeedGet(skip, limit);
    },
    createProblem: (title: string, description: string, bid_deadline: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.createProblemApiV1ProblemPost({
            title: title,
            description: description,
            bid_deadline: bid_deadline
        });
    },
    updateProblem: (problemId: number, title: string, description: string, bid_deadline: string, image_url: string, bid_winner_id: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.updateMyProblemApiV1ProblemProblemIdPut(problemId, {
            title: title,
            description: description,
            bid_deadline: bid_deadline,
            image_url: image_url, 
            bid_winner_id: bid_winner_id
        });
    },
    deleteProblem: (problemId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.deleteProblemApiV1ProblemProblemIdDelete(problemId);
    },
    createProblemBid: (problemId: number, bid: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.createProblemBidApiV1ProblemBidPost({
            problem_id: problemId,
            description: bid
        });
    },
    getProblemBidById: (problemBidId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.readProblemBidByIdApiV1ProblemBidProblemBidIdGet(problemBidId);
    },
    getMyProblemBids: (skip?: number, limit: number = 100) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.readMyProblemBidsApiV1ProblemMyBidsGet(skip, limit);
    },
    getBidsForProblem: (problemId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.readAllBidsForAProblemApiV1ProblemBidsProblemIdGet(problemId);
    },
    updateProblemBid: (problemBidId: number, description: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.updateMyProblemBidApiV1ProblemBidProblemBidIdPut(problemBidId, {
            description: description
        });
    },
    deleteProblemBid: (problemBidId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.deleteProblemBidApiV1ProblemBidProblemBidIdDelete(problemBidId);
    },
    chooseProblemBidWinner: (problemBidId: number, problemBidWinnerId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return ProblemService.chooseWinnerForProblemApiV1ProblemProblemIdAnnouncePost(problemBidId, problemBidWinnerId)
    }
};

export default problemApi;
