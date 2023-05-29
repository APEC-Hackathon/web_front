import { MessageService } from "../client";
import { setHeaders, setBaseURL, setCredentials } from './utils';


const messageApi = {
    getSentMessages: (peerId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return MessageService.readSentMessagesApiV1MessagePeerIdSentGet(peerId);
    },
    getReceivedMessages: (peerId: number) => {
        setHeaders(); setBaseURL(); setCredentials()
        return MessageService.readReceivedMessagesApiV1MessagePeerIdReceivedGet(peerId);
    },
    sendMesage: (peerId: number, content: string) => {
        setHeaders(); setBaseURL(); setCredentials()
        return MessageService.sendMessageApiV1MessagePeerIdPost(peerId, {
            content: content
        });
    }
};

export default messageApi;
