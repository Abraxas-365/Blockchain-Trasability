
import { browser } from "$app/environment";
import { apiReports } from "$lib/Shared/api/apiCalls";

export interface Report {
    id: string;
    name: string;
    type: string;
    user_id: string;
    transaction_id: string;
    data: string;
    platform: string;
    creation_date: string;

}

export async function getReports(): Promise<Array<Report>> {

    const defaultName: string = JSON.stringify({});

    const user = JSON.parse(browser
        ? window.localStorage.getItem("user") ?? defaultName
        : defaultName);

    const { data } = await apiReports.get<Array<Report>>('/', { headers: { Authorization: 'Bearer ' + user.token } })
    console.log(data);

    return data;



}
