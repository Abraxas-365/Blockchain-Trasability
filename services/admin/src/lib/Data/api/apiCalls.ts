import axios from "axios";

const baseApiURL = "http://localhost:80/api";

export const apiBouncer = axios.create({
  baseURL: baseApiURL + "/bouncer",
});
