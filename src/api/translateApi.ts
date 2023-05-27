import {TranslateService, OpenAPI} from "../client";

const translateApi = {
    getTranslatedMessage: (text: string, targetLang: string) => {
        OpenAPI.HEADERS = {
            'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
            'Content-Type': 'text/plain'
        }
        OpenAPI.BASE = "http://172.104.229.42:8000"
        return TranslateService.getMessageTranslatedApiV1TranslateGet(text, targetLang)
    }
}

export default translateApi