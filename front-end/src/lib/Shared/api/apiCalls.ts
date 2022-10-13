import axios from 'axios';

const baseApiURL = 'http://localhost:8000/api'


export const apiUser = axios.create({
    baseURL: baseApiURL + '/bouncer'
});

export const apiReports = axios.create({
    baseURL: baseApiURL + '/reports'
});

export const apiDocuments = axios.create({
    baseURL: baseApiURL + '/catcher'
});
