import { OpenAPI } from "../client";

const setHeaders = () => {
    OpenAPI.HEADERS = {
      'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      'Content-Type': 'text/plain'
    };
  };
  
  const setBaseURL = () => {
    OpenAPI.BASE = "http://172.104.229.42:8000";
  };
  
  const setCredentials = () => {
    OpenAPI.CREDENTIALS = "include";
  };

export { setHeaders, setBaseURL, setCredentials };