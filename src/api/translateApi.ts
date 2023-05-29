import {TranslateService, OpenAPI} from "../client";
import { setHeaders, setBaseURL } from "./utils";

const translateApi = {
    getTranslatedMessage: (text: string, targetLang: string) => {
        setHeaders(); setBaseURL()
        return TranslateService.getMessageTranslatedApiV1TranslateGet(text, targetLang)
    }
}

export default translateApi