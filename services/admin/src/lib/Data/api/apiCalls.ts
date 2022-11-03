import axios from "axios";

const baseApiURL = "http://localhost:80/api";

export const apiAlbum = axios.create({
  baseURL: baseApiURL + "/album",
});

export const apiUsers = axios.create({
  baseURL: baseApiURL + "/bouncer",
});
